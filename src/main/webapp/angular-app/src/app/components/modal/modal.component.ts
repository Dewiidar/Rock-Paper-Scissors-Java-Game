import {Component, OnInit} from '@angular/core';
import {GameStateService} from "../../services/game-state.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  private isModalShown: boolean;
  private modalMessage: Observable<string>;

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

    // Get modal message
    this.modalMessage = this.gameStateService.modalMessageObservable$
  }

  openModal() {
    this.isModalShown = true;
  }

  closeModal() {
    this.isModalShown = false;
    this.gameStateService.isModalOpenSubject.next(false)
  }
}
