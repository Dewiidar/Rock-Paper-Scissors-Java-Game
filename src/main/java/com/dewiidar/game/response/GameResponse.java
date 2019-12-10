package com.dewiidar.game.response;

import com.dewiidar.game.model.Links;

public class GameResponse {
    private long id;
    private Links links;

    public GameResponse(long id) {
        this.id = id;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Links getLinks() {
        return links;
    }

    public void setLinks(Links links) {
        this.links = links;
    }
}
