import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  isModalShown: boolean;

  constructor() {
  }

  ngOnInit() {

  }

  openModal() {
    this.isModalShown = true;
  }

  closeModal() {
    this.isModalShown = false;
  }
}
