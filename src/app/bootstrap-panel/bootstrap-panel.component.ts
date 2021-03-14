import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import  { ApiMockService } from '../api/api-mock.service'
import { Observable } from 'rxjs'

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-bootstrap-panel',
  templateUrl: './bootstrap-panel.component.html',
  styleUrls: ['./bootstrap-panel.component.scss']
})
export class BootstrapPanelComponent implements OnInit {

  constructor(
    private api : ApiMockService,
    private route : ActivatedRoute
  ) { }


  githubusers;
    
    

  ngOnInit(): void {

 this.route.queryParamMap.subscribe(param => {
        let page = param.get('page')
        let order = param.get('order')
        debugger
 })



      this.api.getUsers().subscribe(val=> {
        this.githubusers = val;
      })


  }

}
