import {Component, OnInit} from '@angular/core';
import {GameStateService} from "../../services/game-state.service";
import {IPlayerType} from "../../services/i-game-state";

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss']
})
export class ScoreBoardComponent implements OnInit {
  private player1Score: number;
  private player2Score: number;

  private player1Type: IPlayerType;

  constructor(private gameStateService: GameStateService) {
  }

  ngOnInit() {
    this.gameStateService.playerType$.subscribe(
      playerType => this.player1Type = playerType
    );

    this.gameStateService.player1ScoreObservable$.subscribe(
      value => this.player1Score = value
    );

    this.gameStateService.player2ScoreObservable$.subscribe(
      value => this.player2Score = value
    );
  }

}
