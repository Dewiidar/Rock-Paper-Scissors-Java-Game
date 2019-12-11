export interface IResponseObject {
  resultsObject: {
    resultsMessage: string,
    weaponMessage: string
  }
}

export type IPlayerType = "player" | "computer";
export type IPlayerChoice = "rock" | "paper" | "scissors";

export interface IModel {
  player1Type: IPlayerType,
  player1choice: IPlayerChoice
}
