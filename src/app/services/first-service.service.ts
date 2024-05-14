import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {

  constructor() { }

  shouldWork() {
    console.log("My Service Works");
  }
}
