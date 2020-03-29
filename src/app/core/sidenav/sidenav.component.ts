import { Navigation } from 'src/app/shared/model/sidenav/navigation';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'dsh-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  mainNavList$: Observable<Navigation>;

  constructor(
    private sivenavService: SidenavService
  ) { }

  ngOnInit(): void {
    this.mainNavList$ = this.sivenavService.getNavigationList();
  }

}
