import { Injectable, signal } from '@angular/core';
import { User } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user1 : User = { id: 'admin', grupo: 1, name: 'admin', password: 'admin' };
  user2 : User = { id: 'user', grupo: 2, name: 'user', password: 'user' };
  user3 : User = { id: 'gabriel.vinicius', grupo: 1, name: 'Gabriel Vinicius', password: 'gabriel' };
  user4 : User = { id: 'allan.resutto', grupo: 1, name: 'Allan Resutto', password: 'allan' };
  user5 : User = { id: 'victor.santos', grupo: 1, name: 'Victor Santos', password: 'victor' };
  
  private users = signal<User[]>([this.user1, this.user2,this.user3,this.user4,this.user5]);
  readonly userlist = this.users.asReadonly();

  Login(username: string, password: string): User | null {
    const foundUser = this.users().find(
      (user) => user.id === username && user.password === password
    );
    return foundUser ? foundUser : null;
  }

  addUser(newUser: User): void {
    this.users.update((users) => [...users, newUser]);
  }
}

