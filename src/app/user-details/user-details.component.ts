import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { combineLatest } from 'rxjs';
import { map, switchMap, switchMapTo } from 'rxjs/operators';
import { ApiMockService } from '../api/api-mock.service';
import { Router } from "@angular/router"
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  constructor(
    private api: ApiMockService, 
    private route: ActivatedRoute,
    private router : Router
    ) {}
    
  userId;





submit() {
  this.router.navigate(['/panel'], {
    queryParams : {  page : 1,
      order : "newset" }
  })
}



  ngOnInit(): void {
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(
        switchMap((combine) => {
          let id = combine[0].get('id');
          let page = combine[1].get('page');

          return this.api.getUsers();  
        })
        
      )
      .subscribe((user) => {
        console.log(user);
      });
  }

  //  let id = this.route.snapshot.paramMap.get('id');
  //  let name = this.route.snapshot.paramMap.get('name');
  // console.group("params from snapshot" + id, name)

  //  this.route.queryParamMap.subscribe((query)=> {
  //       console.log('quert page' + query.get('page'))
  //       console.log('quert order' + query.get('order'))
  // });

  //     this.route.paramMap.subscribe((params)=> {
  //       let userId = +params.get("id");
  //       console.log(params)

  //     })
}
