package com.dewiidar.game.model;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class ResultsObject
{
    String resultsMessage, weaponMessage, player2Weapon, player1Weapon, player1Type;

    public ResultsObject(String i, String j, String k, String l, String m)
    {
        resultsMessage = i;
        weaponMessage = j;
        player2Weapon = k;
        player1Weapon = l;
        player1Type = m;
    }
}
