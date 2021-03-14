import { OnInit, Output } from '@angular/core';
import { Component } from '@angular/core';
import { MockService } from "./mock.service"

 



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'mosh-app';

constructor(private mockService : MockService) {

}

courses:string;
img : string = "img";
class :boolean = true;
email:string = "piotr.obrebowski@gmail.com"
text : string = 'dvfsvsfvdfvdfvdfvf'
VievMode : string;



 countries = Object.values({
    1 :   "Poland",
  2 : "Amerletica",
   3 :   "Germany"
 }); 


contactMethod  = [ 
  { id : "1",
    name : "email"  
},
{ id : "2",
name : "phone"  
},
{ id : "1",
name : "skype"  
},
{ id : "1",
name : "whatsup"  
}
]






 

enterpressed() {
  console.log(this.email)
}

buttonClicked(e) {
    e.stopPropagation();
  console.log('button was clicked');
}

divClicked(e) {

  console.log('div was clicked');
}

changeFromComponent(event) {
  console.log(event)
}

inputModel(e) {
  console.log(e)
}



submit(form) {
  
  console.log(form)
}




switchmap(mode:string) {
      this.VievMode = mode;
}




  ngOnInit() {
for(let c of this.contactMethod) {
  console.log(c.name)
}



    console.log()
  this.mockService.getCourses().subscribe(
    (data) => {
      this.courses = data;
      console.log(data)
    }
  )
  }

}





