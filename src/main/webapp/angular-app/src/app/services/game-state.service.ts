import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {IPlayerChoice, IPlayerType, IResponseObject} from "./i-game-state";

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  // ======= Player 1 input data =======
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

  // ======= Score state =======
  public player1ScoreSubject = new BehaviorSubject(0);
  public player1ScoreObservable$ = this.player1ScoreSubject.asObservable();

  public player2ScoreSubject = new BehaviorSubject(0);
  public player2ScoreObservable$ = this.player2ScoreSubject.asObservable();

  // ======= Modal State =======
  public isModalOpenSubject = new BehaviorSubject(false);
  public isModalOpenObservable$ = this.isModalOpenSubject.asObservable();

  public modalMessageSubject = new BehaviorSubject("");
  public modalMessageObservable$ = this.modalMessageSubject.asObservable();

  // ======= Base Url for evaluating winner =======
  private baseUrl = "http://localhost:8080/game/v1";

  constructor(private http: HttpClient) {}

  public evaluateWinner(): Observable<IResponseObject> {
    console.log(`${this.baseUrl}/${this.playerChoice}/${this.playerType}`);
    return this.http.get<IResponseObject>(`${this.baseUrl}/${this.playerChoice}/${this.playerType}`);
  }
}
