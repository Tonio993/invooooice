import { Component, OnInit } from '@angular/core';

import { User } from '../../../model/user';
import { hardcodedUserList } from '../../../hardcode/hardcode-user-list';
import { UserService } from '../../../service/user/user.service';

@Component({
  selector: 'app-lista-utenti',
  templateUrl: './lista-utenti.component.html',
  styleUrls: ['./lista-utenti.component.css']
})
export class ListaUtentiComponent implements OnInit {

  userList: User[];

  constructor(
    public userService: UserService
  ) {}

  ngOnInit() {
    this.userList = this.userService.getUserList();
  }

  onDelete() {
    console.log("Delete!");
  }

}