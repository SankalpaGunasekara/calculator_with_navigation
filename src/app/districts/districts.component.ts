import { Component } from '@angular/core';
import { districtsData } from './districts-data';
@Component({
  selector: 'app-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.css']
})
export class DistrictsComponent {

  data = districtsData

  setStatus: boolean = false

  tempID: any = 0
  tempName: string = ''

  public getData() {

    return this.tempID, this.tempName
  }


  setData(id: any, name: string, status: boolean) {

    console.log(id, name)

    this.tempID = id
    this.tempName = name
    this.setStatus = status


  }



}
