import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
      export abstract class ApiServiceService {
          abstract getUsers() : Observable<any> 
  
}
