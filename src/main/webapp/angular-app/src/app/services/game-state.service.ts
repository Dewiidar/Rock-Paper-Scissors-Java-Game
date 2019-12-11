import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPlayerChoice, IPlayerType, IResponseObject} from "./i-game-state";

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  private _playerType: IPlayerType;
  private _playerChoice: IPlayerChoice;

  get playerType(): IPlayerType {
    return this._playerType;
  }

  set playerType(value: IPlayerType) {
    this._playerType = value;
  }

  get playerChoice(): IPlayerChoice {
    return this._playerChoice;
  }

  set playerChoice(value: IPlayerChoice) {
    this._playerChoice = value;
  }

  // Score state
  player1Score = 0;
  player2Score = 0;

  // Base Url for evaluating winner
  private baseUrl = "http://localhost:8080/game/v1";

  constructor(private http: HttpClient) {}

  public evaluateWinner(): Observable<IResponseObject> {
    return this.http.get<IResponseObject>(`${this.baseUrl}/${this.playerChoice}/${this.playerType}`);
  }
}
