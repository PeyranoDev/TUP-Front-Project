import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { iLogin } from '../../Interfaces/auth';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'] // Corregido 'styleUrls'
})
export class LoginPageComponent {

  authService = inject(AuthService);
  router = inject(Router);
  errorLogin = false;

  loginData: iLogin = {
    username: '',
    password: ''  
  }

  async login(loginForm: NgForm) {
    const { username, password } = loginForm.value;
    const loginData: iLogin = { username, password };
    const res = await this.authService.login(loginData);

    if (res?.status === "ok") {
      this.router.navigate(['/estado-cocheras']);
    } else {
      this.errorLogin = true;
    }
  }
}
