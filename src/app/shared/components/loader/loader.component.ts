import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dsh-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() width = 105;
  @Input() height = 105;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
