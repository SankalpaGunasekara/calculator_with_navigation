import { Component, OnInit } from '@angular/core';
import { DistrictsServiceService } from '../districts-service.service';
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

  sudoName: string = ''






}
