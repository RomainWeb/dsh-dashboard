import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'dsh-card-date',
  templateUrl: './card-date.component.html',
  styleUrls: ['./card-date.component.scss']
})
export class CardDateComponent implements OnInit, OnDestroy {
  currentTime: Date = new Date();
  interval: any;

  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
