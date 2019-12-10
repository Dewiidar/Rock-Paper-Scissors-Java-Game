package com.dewiidar.game.rest;

import com.dewiidar.game.response.GameResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import static com.dewiidar.game.rest.ResourcesConstants.GAME_V1;

@RestController
@RequestMapping(GAME_V1)
public class GameResource {

    @RequestMapping(path = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<GameResponse> getGameStatus() {
        return new ResponseEntity<>(new GameResponse(10), HttpStatus.OK);
    }
}
