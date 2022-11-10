import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { first } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userDetail:any

  constructor(
    private userservice:LoginserviceService,
    private route: Router
  ) { }

  ngOnInit(): void {   
    this.userservice.userData().subscribe(
      res=>{
        this.userDetail=res.data.loginObj.agentObj.agentName
        console.log(res.data.loginObj.agentObj.agentName)
      }
    )
    
  }
  logoutForm() {
    if(confirm('Are you sure you want to log out?')){
      localStorage.clear()
      this.route.navigate(['/login'])
    }
    else{
      return
    }
  }

}
