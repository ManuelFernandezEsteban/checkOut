import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormChechComponent } from './form-chech/form-chech.component';
import { SuccesComponent } from './succes/succes.component';



@NgModule({
  declarations: [FormChechComponent, SuccesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],exports:[
    FormChechComponent
  ]
})
export class ComponentsModule { }
