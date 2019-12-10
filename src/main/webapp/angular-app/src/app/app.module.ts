import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalComponent } from './components/modal/modal.component';
import { ScoreBoardComponent } from './components/score-board/score-board.component';
import {HttpClientModule} from "@angular/common/http";
import {GameStateService} from "./services/game-state.service";

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ScoreBoardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GameStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
