import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const soloAdminGuard: CanActivateFn = (route, state) => {
  
  const authService = inject(AuthService);
  const router = inject(Router)
  
  if (authService.usuario?.isAdmin) {
    return true
  } else {
  const url = router.parseUrl("/estado-cocheras")
  return new RedirectCommand(url)};
};