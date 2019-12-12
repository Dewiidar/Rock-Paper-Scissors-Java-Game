import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {IPlayerChoice, IPlayerType, IResponseObject} from "./i-game-state";

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  // ======= Player 1 input data =======
  public playerTypeSubject = new BehaviorSubject<IPlayerType>(null);
  public playerType$ = this.playerTypeSubject.asObservable();
  public playerChoiceSubject = new BehaviorSubject<IPlayerChoice>(null);
  public playerChoice$ = this.playerChoiceSubject.asObservable();

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

  public modalSubMessageSubject = new BehaviorSubject("");
  public modalSubMessageObservable$ = this.modalSubMessageSubject.asObservable();

  // ======= Base Url for evaluating winner =======
  private baseUrl = "http://localhost:8080/game/v1";

  constructor(private http: HttpClient) {}

  public evaluateWinner(): Observable<IResponseObject> {
    console.log(`${this.baseUrl}/${this.playerChoiceSubject.value}/${this.playerTypeSubject.value}`);
    return this.http.get<IResponseObject>(`${this.baseUrl}/${this.playerChoiceSubject.value}/${this.playerTypeSubject.value}`);
  }
}
