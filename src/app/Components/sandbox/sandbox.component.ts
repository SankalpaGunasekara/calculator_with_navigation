import { Component, OnInit } from '@angular/core';
import { DistrictsServiceService } from '../../Services/districts-service.service';
import { districtsData } from '../districts/districts-data';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {

  constructor(private service: DistrictsServiceService) { }
  ngOnInit(): void {

    console.log(this.service.getSudoName())

  }

  private Data = this.service.serviceData

  //data retrival by calling public method inside of the service
  private districtData = this.service.getDistrictData()

  private pwd: string = 'test'
  status = false
  tempPwd = ''
  sudoName: string = ''
  editStatus = false
  index:number = 0
  

  pwdChecker() {
    if (this.tempPwd == this.pwd) {

      this.status = true
    }
  }

  getData(): any {

    // if (pwd == this.pwd) {
    //   return this.Data
    // }
    // else {
    //   return "Error"
    // }

    return districtsData
  }

  getIndex(dataObject:any){
    let index:any = null
    index = this.getData().indexOf(dataObject)
    console.log(index)
    this.editStatus = true
    this.index = index
  }

  protected UpdateData(id:number,name:string){

    for(let districtData of this.getData()){
      if(districtData.id == id){
        console.log("Exists")
      }
    }



  }










}
