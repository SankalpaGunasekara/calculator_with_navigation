import { Component, Input, OnInit } from '@angular/core';
import { districtsData } from '../districts/districts-data';
@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {


  // editID:any = ''

  data = districtsData
  @Input() setStatus = true
  @Input() editID = 0
  @Input() editName = ''

  tempId: any = 0
  tempName: string = ''

  ngOnInit(): void {
    for (let data of districtsData) {

      if (data.id == this.editID && data.name == this.editName) {

        this.tempId = data.id
        this.tempName = data.name
      }
    }
  }

  SetStatus(status: boolean) {

    this.setStatus = status
  }

  editData() {

    for (let data of districtsData) {

      if (data.id == this.tempId && data.name == this.tempName) {
        data.id = this.editID
        data.name = this.editName
      }
    }
  }
}

