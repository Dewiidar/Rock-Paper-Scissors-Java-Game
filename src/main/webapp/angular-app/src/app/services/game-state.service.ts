import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  playerType: "player" | "computer";
  playerChoice: "rock" | "paper" | "scissors";

  // Score state
  player1Score = 0;
  player2Score = 0;
  private url = "http://localhost:8080/game/v1";

  constructor(private http: HttpClient) {}

  public evaluateWinner() {
    return this.http.get(this.url);
  }
}
