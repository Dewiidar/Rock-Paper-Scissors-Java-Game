package com.dewiidar.game.response;

import com.dewiidar.game.model.*;
import com.fasterxml.jackson.core.util.RequestPayload;

public class GameResponse {
    private ResultsObject resultsObject;

    public ResultsObject getResultsObject() {
        return resultsObject;
    }

    public void setResultsObject(ResultsObject resultsObject) {
        this.resultsObject = resultsObject;
    }

    public GameResponse(String playerChoice, String playerType) {

        // ===== Set game variables =====

        // Converts player type to 'USER' | 'COMPUTER' from string received
        Player.PlayerType player1Type = getPlayer1Type(playerType);

        // Instantiate players
        Player player1 = new Player(player1Type);
        Player player2 = new Player(Player.PlayerType.COMPUTER);

        // Get player 1 choice if type is player or generate a random choice if type is computer
        if (player1.getPlayerType() == Player.PlayerType.USER) {
            // Get the entered user choice
            switch (playerChoice) {
                case "rock":
                    player1.setCurrentChoice(DataTypes.ChoiceType.ROCK);
                    break;
                case "paper":
                    player1.setCurrentChoice(DataTypes.ChoiceType.PAPER);
                    break;
                case "scissors":
                    player1.setCurrentChoice(DataTypes.ChoiceType.SCISSORS);
                    break;
            }
        } else {
            // Generate a random choice
            player1.generateRandomChoice();
        }

        // Generate player 2 random choice
        player2.generateRandomChoice();

        // ===== Evaluate winner based on choices =====

        String player1CurrentChoice = player1.getCurrentChoice();
        String player2CurrentChoice = player2.getCurrentChoice();

        setResultsObject(evaluateWinner(player1CurrentChoice, player2CurrentChoice, player1Type.toString()));
    }

    private static Player.PlayerType getPlayer1Type(String playerType) {
        if (playerType.equals("player")) {
            return Player.PlayerType.USER;
        } else {
            return Player.PlayerType.COMPUTER;
        }
    }

    // Accepts values: ROCK / PAPER / SCISSORS and evaluates which player wins
    private static ResultsObject evaluateWinner(String player1Choice, String player2Choice, String player1Type) {
        if (player1Choice == player2Choice) {
            return setDisplayMessage("It is a tie!", "", player2Choice, player1Choice, player1Type);
        } else {
            switch (player1Choice) {
                case "ROCK":
                    if (player2Choice == "SCISSORS") {
                        return setDisplayMessage("Player 1 wins!", Weapon.WeaponMessages.ROCK.message, player2Choice, player1Choice, player1Type);
                    } else {
                        return setDisplayMessage("Player 2 wins!", Weapon.WeaponMessages.PAPER.message, player2Choice, player1Choice, player1Type);
                    }
                case "PAPER":
                    if (player2Choice == "ROCK") {
                        return setDisplayMessage("Player 1 wins!", Weapon.WeaponMessages.PAPER.message, player2Choice, player1Choice, player1Type);
                    } else {
                        return setDisplayMessage("Player 2 wins!", Weapon.WeaponMessages.SCISSORS.message, player2Choice, player1Choice, player1Type);
                    }
                case "SCISSORS":
                    if (player2Choice == "PAPER") {
                        return setDisplayMessage("Player 1 wins!", Weapon.WeaponMessages.SCISSORS.message, player2Choice, player1Choice, player1Type);
                    } else {
                        return setDisplayMessage("Player 2 wins!", Weapon.WeaponMessages.ROCK.message, player2Choice, player1Choice, player1Type);
                    }
                default:
                    return setDisplayMessage("Please enter: ROCK - PAPER - SCISSORS", "", "", "", player1Type);
            }
        }
    }

    private static ResultsObject setDisplayMessage(String resultsMessage, String weaponMessage, String player2Weapon, String player1Weapon, String player1Type) {

        return new ResultsObject(resultsMessage, weaponMessage, player2Weapon, player1Weapon, player1Type);
    }

}
