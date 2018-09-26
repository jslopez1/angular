import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
@Injectable()
export class AuthGuardService implements CanActivate{
    constructor(private authService:AuthService,private router :Router){}

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
        if(this.authService.token!=null) return true;
        else this.router.navigate(["/signin"]);
    }

}