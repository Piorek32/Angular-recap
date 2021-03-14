import { Input } from '@angular/core';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
 


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  @Input() myFriend: any;
  @Output()  change = new EventEmitter();
  constructor() { }


  isFavorite:boolean = true;

  toogleStar() {

    this.isFavorite = !this.isFavorite;   
     this.change.emit(this.isFavorite);
  }

  ngOnInit(): void {

    this.change.emit(true)
  }

}
