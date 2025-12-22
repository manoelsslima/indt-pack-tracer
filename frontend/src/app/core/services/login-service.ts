import { Injectable, signal, inject } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user1: User = { id: 'admin', grupo: 1, name: 'admin', password: 'admin', setorId: 0 };
  user2: User = { id: 'user', grupo: 2, name: 'user', password: 'user', setorId: 0 };
  user3: User = { id: 'gabriel.vinicius', grupo: 1, name: 'Gabriel Vinicius', password: 'gabriel', setorId: 0 };
  user4: User = { id: 'allan.resutto', grupo: 1, name: 'Allan Resutto', password: 'allan' , setorId: 0};
  user5: User = { id: 'victor.santos', grupo: 3, name: 'Victor Santos', password: 'victor', setorId: 0 };

  isAuthenticated = signal<boolean>(this.initializeAuthState());

  private router = inject(Router);

  private initializeAuthState(): boolean {
    const storedAuthState = localStorage.getItem('isAuthenticated');
    return storedAuthState == 'true';
  }

  private users = signal<User[]>([this.user1, this.user2, this.user3, this.user4, this.user5]);
  readonly userlist = this.users.asReadonly();

  Login(username: string, password: string): User | null {
    const foundUser = this.users().find(
      (user) => user.id === username && user.password === password
    );
    if (foundUser) {
      this.isAuthenticated.set(true);
      localStorage.setItem('isAuthenticated', 'true');
      this.router.navigate(['home']);
      return foundUser;
    } else {
      this.isAuthenticated.set(false);
      return null;
    }
  }
  
  logout(): void {
    this.isAuthenticated.set(false);
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['']);
  }

  addUser(newUser: User): void {
    this.users.update((users) => [...users, newUser]);
  }
}
