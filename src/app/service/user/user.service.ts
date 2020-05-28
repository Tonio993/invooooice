import { Injectable } from '@angular/core';

import { User } from '../../model/user';
import { hardcodedUserList } from '../../hardcode/hardcode-user-list';

@Injectable()
export class UserService {
  private id = 0;
  private userMap: Map;

  constructor() {
    this.userMap = new Map();
    for (let user of hardcodedUserList) {
      this.addUser(user);
    }
  }

  ngOnInit() {
  }

  getUser(id: number) {
    return this.userMap.get(id);
  }

  getUserList() {
    return Array.from(this.userMap.values());
  }

  addUser(user: User) {
    user.id = ++this.id;
    this.userMap.set(user.id, user);
  }

  updateUser(user: User) {
    this.userMap.set(user.id, user);
  }

}