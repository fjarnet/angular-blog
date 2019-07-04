import { Injectable } from '@angular/core';

export const LOGIN_KEY = 'username';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  register(username: string): void {
    localStorage.setItem(LOGIN_KEY, username);
  }

  check(): boolean {
    return !!this.getUser();
  }

  disconnect() {
    localStorage.removeItem(LOGIN_KEY);
  }

  getUser(): string {
    return localStorage.getItem(LOGIN_KEY);
  }
}
