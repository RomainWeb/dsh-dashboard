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
  mainNavList: any = [
    {
      title: 'Main navigation',
      items: [
        {
          title: 'Analytics',
          icon: 'analytics',
          route: '/dashboard/analytics'
        }
      ]
    },
    {
      title: 'Pages',
      items: [
        {
          title: 'Authentication',
          icon: 'user-lock',
          route: '/pages',
          items: [
            { title: 'Login', route: '/login' },
            { title: 'Register', route: '.' },
            { title: 'Forgot password', route: '.' },
          ]
        },
        {
          title: 'Chat',
          icon: 'comments',
          route: '/pages/chat'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
