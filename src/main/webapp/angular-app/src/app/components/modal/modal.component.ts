import {Component, OnInit} from '@angular/core';
import {GameStateService} from "../../services/game-state.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public isModalShown: boolean;
  public modalMessage: Observable<string>;
  public modalSubMessage: Observable<string>;

  constructor(private gameStateService: GameStateService) {
  }

  ngOnInit() {
    // Subscribe to modal state to show model on state = true
    this.gameStateService.isModalOpenObservable$.subscribe(
      modalState => {
        if (modalState) {
          this.openModal()
        }
      }
    );

    // Get modal messages
    this.modalMessage = this.gameStateService.modalMessageObservable$;
    this.modalSubMessage = this.gameStateService.modalSubMessageObservable$;
  }

  openModal() {
    this.isModalShown = true;
  }

  closeModal() {
    this.isModalShown = false;
    this.gameStateService.isModalOpenSubject.next(false)
  }
}
