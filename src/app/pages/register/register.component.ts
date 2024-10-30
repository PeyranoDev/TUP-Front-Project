import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { iRegister } from '../../Interfaces/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  authService = inject(AuthService);
  router = inject(Router);
  errorRegister = false;

  registerData: iRegister = {
    username: '',
    password: '',
    nombre: '',
    apellido: ''
  }

  async register(registerForm: NgForm) {
    const { username, password, nombre, apellido } = registerForm.value;
    const registerData: iRegister = { username, password, nombre, apellido };
  
    const res = await this.authService.register(registerData);
  

    if (res?.status === 201) {

      this.router.navigate(['/login']);
    } else if (res?.status === 400) {

      this.errorRegister = true;
      console.error('Error: Propiedades obligatorias faltantes');
    } else if (res?.status === 409) {

      this.errorRegister = true;
      console.error('Error: El usuario ya existe');
    } else {

      this.errorRegister = true;
      console.error('Error en el registro');
    }
  }
}  
