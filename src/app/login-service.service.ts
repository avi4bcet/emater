import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import {Contact} from '../app/contact.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  selectedContact: Contact;
  contactlist: Contact[];

  constructor(private _http: Http) { }

  /* UserDetails Extract*/

  getAllUsersperAccount()
  {

    let headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    
   this._http.get('/emater-rest/motherframework/accounts/1/users',{ headers: new Headers({'Accept' : '*/*' }) }).map(response => response.json()
 ).
 subscribe((data)=> this.converttoarray(data))
}
converttoarray(data) {
 this.contactlist = data;
 console.log(this.contactlist);
 
}

  saveInLocal(key, val): void {
    //console.log('recieved= key:' + key + 'value:' + val);

   localStorage.setItem(key, val);
   
   }

   getFromLocal(key): void {
    let localval = localStorage.getItem(key);
    //console.log(localval);
   }

   checkLogin(nf: NgForm){
    //console.log(nf);
    var body = JSON.stringify(nf);
 //console.log(body);
 let url = '/emater-rest/motherframework/login';

 let headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
let options = new RequestOptions({ headers: headers, withCredentials : true });

var body = JSON.stringify(nf);
 console.log(body);
 

this._http.post('/emater-rest/motherframework/login', body, options)
  .subscribe(
    res => {
      if(res.status>=200 && res.status<300)
      {
        
        this.saveInLocal("userid", 1);
        this.saveInLocal("username", "skn_admin_d");
        //console.log(SESSION_STORAGE);
       
        
      }
    },
    err => {
      console.log(err);
    }
  );


  
  }


  getMenuForUser(): Observable<any> {
    return this._http.get('/emater-rest/motherframework/users/1/menus').map(res => res.json());
  }

}
