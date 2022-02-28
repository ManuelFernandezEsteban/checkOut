import { Component, OnInit } from '@angular/core';
import { ServicesModalService } from '../../services/services-modal.service';

@Component({
  selector: 'app-succes',
  templateUrl: './succes.component.html',
  styleUrls: ['./succes.component.css']
})
export class SuccesComponent implements OnInit { 

  constructor(private modal:ServicesModalService) { }

  ngOnInit(): void {   
  }

  cerrar(){
    this.modal.modal.emit(false);
  }


}
