import { Injectable } from '@angular/core';
import { districtsData } from './districts/districts-data';
@Injectable({
  providedIn: 'root'
})
export class DistrictsServiceService {

  constructor() { }

  serviceData = districtsData

  private sudoName: string = 'Service is working'

  getSudoName() {
    return this.sudoName
  }

}
