import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';
import {LoginServiceService} from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private logserv: LoginServiceService, private router: Router) { }

  ngOnInit() {

  }

  chkLogin(form: NgForm)
  {
    console.log(">>> router", this.router)
    //console.log(">>> activatedRoute", t)
    //console.log(form.value);
    this.logserv.checkLogin(form.value);
   this.logserv.getFromLocal("userid");
   this.logserv.getFromLocal("username");
    this.router.navigate(["/managecontact"]);
  }

}
