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

  onPlayer1TypeChange(value: string) {
    this.gameStateService.playerType = <IPlayerType>value;
  }

  onPlayer1ChoiceChange(value: string) {
    this.gameStateService.playerChoice = <IPlayerChoice>value;
  }

  evaluateWinner() {
    this.gameStateService.evaluateWinner().subscribe(
      response => {
        console.log(response);
        if (response) {
          this.updatePlayer2Image(response.resultsObject.player2Weapon);
          this.gameStateService.modalMessageSubject.next(response.resultsObject.resultsMessage);
          this.gameStateService.isModalOpen.next(true);
        }
      },
      error => console.log(error)
    )
  }

  updatePlayer2Image(returnedWeapon: string): void {
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
}
