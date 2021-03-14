import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { AppInputDirective } from './app-input.directive';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component'
import {  ReactiveFormsModule } from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
@NgModule({
  declarations: [
    SummaryPipe,
    AppComponent,
    CoursesComponent,
    BootstrapPanelComponent,
    AppInputDirective,
    ReactiveFormsComponent,
    UserDetailsComponent
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{
      path: 'reactive',
      component : ReactiveFormsComponent
    },
    {
      path :  'panel',
      component : BootstrapPanelComponent
      
    },
    {
      path :  'user-details/:id/:name',
      component : UserDetailsComponent
      
    }
  ]),
    
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
