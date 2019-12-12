import {Component, OnInit} from '@angular/core';
import {GameStateService} from "../../services/game-state.service";

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss']
})
export class ScoreBoardComponent implements OnInit {
  private player1Score: number;
  private player2Score: number;

  constructor(private gameStateService: GameStateService) {
  }

  ngOnInit() {
    this.gameStateService.player1ScoreObservable$.subscribe(
      value => this.player1Score = value
    );

    this.gameStateService.player2ScoreObservable$.subscribe(
      value => this.player2Score = value
    );
  }

}
