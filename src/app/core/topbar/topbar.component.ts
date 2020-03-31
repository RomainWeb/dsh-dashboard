import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'dsh-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  @Input() appSidenav: MatSidenav;
  @Input() settingSidenav: MatSidenav;

  constructor() { }

  ngOnInit(): void {
  }

}
