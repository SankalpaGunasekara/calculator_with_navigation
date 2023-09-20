import { Injectable } from '@angular/core';
import { districtsData } from './districts/districts-data';
@Injectable({
  providedIn: 'root'
})
export class DistrictsServiceService {

  constructor() { }

  data = districtsData

  private sudoName: string = 'Service is working'

  getSudoName() {
    return this.sudoName
  }

  getDistrictData(): any {

    const tempData = []

    for (let district of districtsData) {

      tempData.push({ id: district.id, name: district.name })
    }

    return tempData;
  }

}
