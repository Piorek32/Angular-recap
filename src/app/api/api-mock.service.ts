import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { ApiServiceService } from "./api-service.service"
@Injectable({
  providedIn: 'root'
})
export class ApiMockService  implements ApiServiceService{


  githubusers = [
    {
      name : "piotr",
      id : 1
    },
    {
      name : "piotr",
      id : 1
    }
    ]



  constructor() { }
        getUsers(): Observable<any> {
              return of(this.githubusers)
  }



  
}
