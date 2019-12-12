package com.dewiidar.game.rest;

import com.dewiidar.game.model.RequestObject;
import com.dewiidar.game.response.GameResponse;
import com.fasterxml.jackson.core.util.RequestPayload;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(ResourcesConstants.GAME_V1)
public class GameResource {

    @CrossOrigin(origins = {"http://localhost:4200", "https://rock-paper-scissors-dewiidar.herokuapp.com/"})
    @RequestMapping(path = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseBody
    public ResponseEntity<GameResponse> getGameStatus(
            @PathVariable("playerChoice") String playerChoice,
            @PathVariable("playerType") String playerType
    ) {
        return new ResponseEntity<>(new GameResponse(playerChoice, playerType), HttpStatus.OK);
    }
}
