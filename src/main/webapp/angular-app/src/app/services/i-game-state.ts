export interface IResponseObject {
  resultsObject: {
    resultsMessage: string,
    weaponMessage: string,
    player2Weapon: string,
    player1Weapon: string
  }
}

export type IPlayerType = "player" | "computer";
export type IPlayerChoice = "rock" | "paper" | "scissors";

export interface IModel {
  player1Type: IPlayerType,
  player1choice: IPlayerChoice
  player2choice: IPlayerChoice
}
