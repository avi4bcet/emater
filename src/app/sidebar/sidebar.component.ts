import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../login-service.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  varname2:string;
  condition:any;
  RootMenu=[];
  RootMenuChildren = [];
  counterArr = [];
  CountOfChildOfMenu=[];
  Fee=[];
  var1 = 0;
  var2= 0;
  Admin=[];
  public test=[];
  constructor(private logserv: LoginServiceService) { }

  ngOnInit() {

    let idofUser = localStorage.getItem("userid");
    if(idofUser!='') {
      this.condition = "false";
    }
    else {
      this.condition = "false";
    }

      this.logserv.getMenuForUser().subscribe(
        res => {


          

          
     
                   
                    Object.entries(res).forEach(element => {
                      for (var k in res) {

                        let ArrCount = res.root.children;
                        let counter=0;
                        let TotalMenuCount = Object.entries(res.root.children).length;




                        res.root.children.forEach(element => {
                            counter++;
                            let CountOfMenu = Object.entries(element.children).length;
                            //console.log(CountOfMenu);
                            //this.RootMenu.push({"numberChild":CountOfChild});
                            this.RootMenu.push(element.data);
                            //console.log(element.children);
                            this.CountOfChildOfMenu.push(element.children);
                            //this.CountOfChildOfMenu = Object.entries(element.children).length;
                             // console.log(CountOfChildOfMenu);
                              //this.counterArr.push(CountOfChildOfMenu);

                              //this.CountOfChildOfMenu.push(CountOfMenu);
                             // console.log(counter);
                              //console.log(TotalMenuCount);
                              //console.log(CountOfMenu);
                              

                              




                            element.children.forEach(element => {
                              
                              //console.log(element);
                              
                              this.RootMenuChildren.push(element.data);
                            })
                            

                        });

                
                        
                      }
                    })

                    //console.log(this.RootMenu);
                    //console.log(this.counterArr);
                  // console.log(this.RootMenuChildren);
                    // console.log(this.CountOfChildOfMenu);
                    
                    

                   
                     
                   

          

          

         // console.log(res);
          // varname = res["root"]["children"][0]["data"];
            
          //let varname = (Object.entries(res));
          //console.log(Object.entries(Object.entries(Object.entries(Object.entries(varname[0][1])[4])[1][1])[0][1])).children;


            //this.test = varname;
            
          //this.varname2 = Object.entries(Object.entries(Object.entries(Object.entries(varname[0][1])[4])[1][1])[0][1])[0][1].content;

         
          
        });
      




  }

}
