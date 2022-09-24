import { MycartService } from './../../services/mycart.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() price:any
  @Output() event = new EventEmitter
  name:any
  constructor( private router: Router, private mycart:MycartService) { }

  ngOnInit(): void {
    this.mycart.totalprice = this.price
  }
  onsubmit(name: any){
    this.router.navigate(["/comfirmation"])
    this.name = name.value
    this.event.emit(this.name)
  }
}
