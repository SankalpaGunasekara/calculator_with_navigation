import { Component, OnInit } from '@angular/core';
import { DistrictsServiceService } from '../districts-service.service';
import { districtsData } from '../districts/districts-data';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {

  

  private Data = this.service.serviceData

  private pwd:string = 'test'
  status = false
  tempPwd = ''


  constructor(private service: DistrictsServiceService) { }
  ngOnInit(): void {

    console.log(this.service.getSudoName())

  }

  pwdChecker(){
    if(this.tempPwd == this.pwd){

      this.status = true
    }
  }

  public getData(pwd:string):any{

    if(pwd == this.pwd){
      return this.Data
    }
    else{
      return "Error"
    }
    

  }
 

  sudoName: string = ''







}
