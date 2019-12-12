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
  public model: IModel = {
    player1Type: 'player',
    player1choice: 'paper',
    player2choice: null
  };
  // Holds player 1 type notifications when type change
  public player1Type: IPlayerType;

  constructor(private gameStateService: GameStateService) {
  }

  ngOnInit(): void {
    // Initialization
    this.gameStateService.playerTypeSubject.next(this.model.player1Type);
    this.gameStateService.playerChoiceSubject.next(this.model.player1choice);

    // Subscribes to Player 1 Type notifications
    this.gameStateService.playerType$.subscribe(
      playerType => this.player1Type = playerType
    )
  }

  public onPlayer1TypeChange(value: string) {
    this.gameStateService.playerTypeSubject.next(<IPlayerType>value);
  }

  public onPlayer1ChoiceChange(value: string) {
    this.gameStateService.playerChoiceSubject.next(<IPlayerChoice>value);
  }

  public evaluateWinner() {
    this.gameStateService.evaluateWinner().subscribe(
      response => {
        if (response) {
          // Updates player 2 image with the random choice returned from server
          this.updatePlayer2Image(response.resultsObject.player2Weapon);

          // Updates player 1 selected choice (used when user 1 is computer and a random choice has been generated from backend for him)
          this.model.player1choice = <IPlayerChoice>response.resultsObject.player1Weapon.toLowerCase();

          // Iterates score
          this.iterateScore(response.resultsObject.resultsMessage);

          // Notifies modal with the new response messages
          this.gameStateService.modalMessageSubject.next(response.resultsObject.resultsMessage);
          this.gameStateService.modalSubMessageSubject.next(response.resultsObject.weaponMessage);
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
        this.model.player2choice = null;
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
