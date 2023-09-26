import { Injectable } from '@angular/core';
import { districtsData } from '../Components/districts/districts-data';
@Injectable({
  providedIn: 'root'
})
export class DistrictsServiceService {

  constructor() { }

  serviceData = districtsData
  private DistrictData = districtsData

  private sudoName: string = 'Service is working'

  getSudoName() {
    return this.sudoName
  }

  getDistrictData():any{

    return this.DistrictData
  }

  scrollToElement(target:string) {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // You can use 'auto' for instant scrolling
    }
  }
  

}

