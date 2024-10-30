import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-dashboard-container',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent {
  username: string | null = null;
  isSignoutMenuVisible: boolean = false; // Variable para controlar la visibilidad

  constructor(private authService: AuthService, private router: Router) {}

  toggleSignoutMenu(): void {
    this.isSignoutMenuVisible = !this.isSignoutMenuVisible; // Alternar visibilidad
  }

  logout(): void {
    this.username = null;
    this.router.navigate(['/login']); 
  }
}
