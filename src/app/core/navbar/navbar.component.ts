import { Component, OnInit } from '@angular/core';
import { NavigationList } from './navigation';

import { hardcodedNavigationList } from '../../hardcode/hardcode-navigation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navigationList: NavigationList = hardcodedNavigationList;

  constructor() { }

  ngOnInit() {
  }

  public getTypeOf(value) : string {
    return typeof value;
  }
}