import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : User = new User();
  constructor(private loginService: LoginService,
  private router: Router) { }

  ngOnInit() {
  }

  login(){
    if(this.loginService.login(this.user)){
      //naviate to home page      
      this.router.navigate(['employee']);
    }
    // show the errort
  }

}
