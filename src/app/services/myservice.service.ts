import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  iShouldWork(): void {
    console.log("My service works.");
  }
}
