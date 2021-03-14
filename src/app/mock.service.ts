import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }




  getCourses() : Observable<any> {
     const results = Array.from(Array(3).keys()).map(i => {
       return {
         name : `course${i}`,
         id : i
       }
     })


     return of(results);
  }
}
