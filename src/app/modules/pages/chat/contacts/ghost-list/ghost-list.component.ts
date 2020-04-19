import { Component, OnInit, Input } from '@angular/core';
import { fadeOut } from 'src/app/shared/animations/fade-animations';

@Component({
  selector: 'dsh-ghost-list',
  templateUrl: './ghost-list.component.html',
  styleUrls: ['./ghost-list.component.scss']
})
export class GhostListComponent implements OnInit {
  @Input() ghosts : any[];

  constructor() { }

  ngOnInit(): void {
  }
}
