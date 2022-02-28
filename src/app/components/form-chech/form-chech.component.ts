import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServicesModalService } from '../../services/services-modal.service';

@Component({
  selector: 'app-form-chech',
  templateUrl: './form-chech.component.html',
  styleUrls: ['./form-chech.component.css']
})
export class FormChechComponent implements OnInit {

  public validoYEnviado:boolean=false;

  public payForm=this.fb.group({
    fullName:['',[Validators.required,Validators.pattern("[a-zA-Z Ñ ñ á é í ó ú Á É Í Ó Ú]*")]],
    cardNumber:['',[Validators.required,Validators.pattern("([0-9]{4} ){3}([0-9]{4})")]],
    expiration:['',[Validators.required,Validators.pattern("(0[1-9]|1[0-2])/([0-9][0-9])")]],
    cvv:['',[Validators.required,Validators.pattern("[0-9][0-9][0-9]")]],
    zipCode:['',[Validators.required]]
  })
  
  constructor(private fb:FormBuilder,
              private modal:ServicesModalService) { }

  ngOnInit(): void {
    this.modal.modal.subscribe(resp=>{
      this.validoYEnviado=resp;
    })
  }

  validarCard(){

    this.validoYEnviado=true&&this.payForm.valid;

    console.log(this.validoYEnviado);

    this.payForm.reset();
  }
}
