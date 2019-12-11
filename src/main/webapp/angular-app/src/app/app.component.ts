import {Component, OnInit} from '@angular/core';
import {GameStateService} from "./services/game-state.service";
import {IModel, IPlayerChoice, IPlayerType} from "./services/i-game-state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private model: IModel = {
    player1Type: 'player',
    player1choice: 'paper'
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
      response => console.log(response),
      error => console.log(error)
    )
  }
}
