import { CanActivateFn, Router } from '@angular/router';

export const verificarGuard: CanActivateFn = (route, state) => {
  console.log("Verificando acceso",route,state)

  let usuarioAuth= false;

  let router:Router = new Router();


  if(usuarioAuth ){
    return true;
  }else{
router.navigate(['no-auth'])
    return false;
  }

};
