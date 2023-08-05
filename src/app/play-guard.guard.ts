import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ConfigService } from './config.service';

export const playGuardGuard: CanActivateFn = (route, state) => {
  let config: ConfigService = inject(ConfigService);
  let router: Router = inject(Router);

  if (config.players != null && config.grid != null) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};
