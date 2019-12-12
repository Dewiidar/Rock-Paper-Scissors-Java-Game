package com.dewiidar.game.model;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

public class RequestObject {
    public String playerType;
    public String playerChoice;

    public RequestObject(String i, String j)
    {
        playerType = i;
        playerChoice = j;
    }
}
