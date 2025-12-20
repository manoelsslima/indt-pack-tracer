import { Injectable, signal, inject } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user1: User = { id: 'admin', grupo: 1, name: 'admin', password: 'admin', setorId: 0 };
  user2: User = { id: 'user', grupo: 2, name: 'user', password: 'user', setorId: 0 };
  user3: User = {
    id: 'gabriel.vinicius',
    grupo: 2,
    name: 'Gabriel Vinicius',
    password: 'gabriel',
    setorId: 8,
  };
  user4: User = {
    id: 'allan.resutto',
    grupo: 1,
    name: 'Allan Resutto',
    password: 'allan',
    setorId: 7,
  };
  user5: User = {
    id: 'victor.santos',
    grupo: 3,
    name: 'Victor Santos',
    password: 'victor',
    setorId: 1,
  };

  private users = signal<User[]>([this.user1, this.user2, this.user3, this.user4, this.user5]);
  readonly userlist = this.users.asReadonly();

  authenticatedUser = signal<string>(this.initializeAuthState());

  IdEditado: string = '';

  private router = inject(Router);

  private initializeAuthState(): string {
    const storedAuthState = localStorage.getItem('authenticatedUser');
    return storedAuthState ? storedAuthState : 'NotFound';
  }

  Login(username: string, password: string): User | null {
    const foundUser = this.users().find(
      (user) => user.id === username && user.password === password
    );
    if (foundUser) {
      this.authenticatedUser.set(JSON.stringify(foundUser));
      localStorage.setItem('authenticatedUser', JSON.stringify(foundUser));
      this.router.navigate(['home']);
      return foundUser;
    } else {
      this.authenticatedUser.set('NotFound');
      return null;
    }
  }

  logout(): void {
    this.authenticatedUser.set('NotFound');
    localStorage.removeItem('authenticatedUser');
    this.router.navigate(['']);
  }

  addUser(newUser: User): void {
    this.users.update((users) => [...users, newUser]);
  }

  getUsers(): User[] {
    return this.users();
  }
  deleteUser(usuarioId: string): void {
    this.users.update((users) => users.filter((user) => user.id !== usuarioId));
  }

  editUser(updatedUser: User): void {
    this.users.update((users) =>
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  }

  editId(id: string) {
    this.IdEditado = id;
  }
  getIdEditado(): string {
    return this.IdEditado;
  }

  getUserById(id: string): User | null {
    const foundUser = this.users().find((user) => user.id === id.toString());
    return foundUser ? foundUser : null;
  }
}
