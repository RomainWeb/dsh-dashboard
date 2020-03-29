import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dsh-static',
  template: '<router-outlet></router-outlet>'
})
export class StaticComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
