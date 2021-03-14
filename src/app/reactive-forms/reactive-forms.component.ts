import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, MinLengthValidator, Validators, FormArray, FormBuilder } from '@angular/forms' 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserNameValidators } from "./validators"

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  constructor(fb : FormBuilder ) { 
    this.form3 = fb.group({
        name : ["", Validators.required],
        contact :  fb.group({
            email : [],
            phone : []
        }),
        topics : fb.array([])      
    })


    
  }




  form = new FormGroup({
    account : new FormGroup({
    username  :  new FormControl("", [Validators.required, Validators.minLength(3)],
    UserNameValidators.mustBeUniqe),

    password : new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      UserNameValidators.noSpace,
    ])

    })
  });

form2 = new FormGroup({
  name : new FormControl("", Validators.required),
  contacts : new FormGroup({
    email : new FormControl("", [Validators.required, Validators.email]),
    phone : new FormControl("", [Validators.required,]),
  }),
  topics : new FormArray([])
})


form3




  get username() {
    return this.form.get('account.username')
  }


  get password() {
    return this.form.get('account.password')
  }
  submit(form) {
      let { username, password } = form.value.account;
      console.log(username, password) 

  }


   addTopic(topic : HTMLInputElement) {
      let include = this.topics.value.includes(topic.value)
      if(!include) {
     (this.form2.get('topics') as FormArray).push(new FormControl(topic.value));
     topic.value = "";
      } else {
         this.topics.setErrors({
           mustBeUnice : true
         })
      }
     
   }


   get topics() {
     return this.form2.get('topics') as FormArray;
   }


   removeTopic(topic:FormControl) {
     console.log(topic)
     console.log(this.topics)
      let index = this.topics.value.indexOf(topic)
      this.topics.removeAt(index)
   }



   
   
  
  ngOnInit(): void {
  }

}
