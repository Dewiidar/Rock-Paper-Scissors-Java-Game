package com.dewiidar.game.model;

public class Weapon {
    // Returns weapon win messages
    public enum WeaponMessages {
        ROCK("Rock crushes scissors"),
        PAPER("Paper covers rock"),
        SCISSORS("Scissors cuts paper");

        public final String message;

        WeaponMessages(String message) {
            this.message = message;
        }
    }

    // Accept number from 1:3 and returns weapon's name based on the passed number
    public static DataTypes.ChoiceType getWeaponName(int number) {
        switch (number) {
            case 1:
                return DataTypes.ChoiceType.ROCK;
            case 2:
                return DataTypes.ChoiceType.PAPER;
            case 3:
                return DataTypes.ChoiceType.SCISSORS;
        }
        return null;
    }

    // Returns weapon number using weapon name
    enum WeaponNumber {
        ROCK(1),
        PAPER(2),
        SCISSORS(3);

        public final int number;

        WeaponNumber(int number) {
            this.number = number;
        }
    }
}
