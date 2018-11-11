import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from 'src/app/login-service.service';
@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.scss']
})
export class ManageuserComponent implements OnInit {

  constructor(public logserv: LoginServiceService) { }

  ngOnInit() {
    this.logserv.getAllUsersperAccount();
  }

}
