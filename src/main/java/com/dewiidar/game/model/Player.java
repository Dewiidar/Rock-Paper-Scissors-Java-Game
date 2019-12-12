package com.dewiidar.game.model;

import java.util.Random;

public class Player {
    private PlayerType type; // USER - COMPUTER
    private DataTypes.ChoiceType currentChoice; // ROCK - PAPER - SCISSORS

    public enum PlayerType {
        USER, COMPUTER;
    }

    public Player(PlayerType type) {
        this.type = type;
    }

    public PlayerType getPlayerType() {
        return this.type;
    }

    public String getCurrentChoice() {
        return this.currentChoice.toString();
    }

    public void setCurrentChoice(DataTypes.ChoiceType choice) {
        this.currentChoice = choice;
    }

    // Generates a random number from 1:3
    private static int generateRandomNumber() {
        Random randomNumber = new Random();
        return randomNumber.nextInt(3) + 1;
    }

    // Generates a random choice
    public void generateRandomChoice() {
        int randomNumber = generateRandomNumber();
        DataTypes.ChoiceType randomChoiceName = Weapon.getWeaponName(randomNumber);
        this.setCurrentChoice(randomChoiceName);
    }
}
