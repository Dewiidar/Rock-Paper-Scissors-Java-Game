import {Component, OnInit} from '@angular/core';
import {GameStateService} from "./services/game-state.service";
import {IModel, IPlayerChoice, IPlayerType} from "./services/i-game-state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Player 2 choice (Random from server)

  // Initialization object
  private model: IModel = {
    player1Type: 'player',
    player1choice: 'paper',
    player2choice: null
  };

  constructor(private gameStateService: GameStateService) {
  }

  ngOnInit(): void {
    // Initialization
    this.gameStateService.playerType = this.model.player1Type;
    this.gameStateService.playerChoice = this.model.player1choice;
  }

  private onPlayer1TypeChange(value: string) {
    this.gameStateService.playerType = <IPlayerType>value;
  }

  private onPlayer1ChoiceChange(value: string) {
    this.gameStateService.playerChoice = <IPlayerChoice>value;
  }

  private evaluateWinner() {
    this.gameStateService.evaluateWinner().subscribe(
      response => {
        console.log(response);
        if (response) {
          // Updates player 2 image with the random choice returned from server
          this.updatePlayer2Image(response.resultsObject.player2Weapon);

          // Updates player 1 selected choice (used when user 1 is computer and a random choice has been generated from backend for him)
          this.model.player1choice = <IPlayerChoice>response.resultsObject.player1Weapon.toLowerCase();

          // Iterates score
          this.iterateScore(response.resultsObject.resultsMessage);

          // Notifies modal with the new response message
          this.gameStateService.modalMessageSubject.next(response.resultsObject.resultsMessage);
          // Opens modal
          this.gameStateService.isModalOpenSubject.next(true);
        }
      },
      error => console.log(error)
    )
  }

  private updatePlayer2Image(returnedWeapon: string): void {
    switch (returnedWeapon) {
      case 'ROCK':
        this.model.player2choice = 'rock';
        break;
      case 'PAPER':
        this.model.player2choice = 'paper';
        break;
      case 'SCISSORS':
        this.model.player2choice = 'scissors';
        break;
      case '':
        this.model.player2choice = this.gameStateService.playerChoice;
    }

  }

  private iterateScore(restultsMessage: string): void {
    switch (restultsMessage) {
      case "Player 1 wins!":
        let player1Score = this.gameStateService.player1ScoreSubject.value;
        this.gameStateService.player1ScoreSubject.next(++player1Score);
        break;
      case "Player 2 wins!":
        let player2Score = this.gameStateService.player2ScoreSubject.value;
        this.gameStateService.player2ScoreSubject.next(++player2Score);
        break;
    }
  }
}
