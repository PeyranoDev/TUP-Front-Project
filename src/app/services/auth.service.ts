import { Injectable } from '@angular/core';
import { iLogin, iRegister, iResLogin } from '../Interfaces/auth';
import { iUser } from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://qvvvg5qs-4001.brs.devtunnels.ms/';

  constructor() { }

  usuario: iUser | undefined;

  async login(loginData: iLogin): Promise<iResLogin | undefined> {
    const res = await fetch(this.apiUrl + "login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    if (res.status !== 200) return;
    const resJson: iResLogin = await res.json();
    
    if (!resJson.token) return;

    this.usuario = {
      username: loginData.username,
      token: resJson.token,
      isAdmin: await this.isAdmin(resJson.token, loginData.username),
    };
    console.log(this.usuario)
    return resJson;
  }

  private async isAdmin(token: string, username : string) {
    console.log(token)
    const res = await fetch(`${this.apiUrl}usuarios/${username}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    });  
    return res.status === 200;
  }

  async register(registerData: iRegister): Promise<Response> {
    try {
      const res = await fetch(this.apiUrl + "register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });
      return res;
    } catch (error) {
      console.error('Error in register request:', error);
      return { status: 500 } as Response; 
    }
  }
  
}  
