import { MycartService } from './../../services/mycart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comfirmation',
  templateUrl: './comfirmation.component.html',
  styleUrls: ['./comfirmation.component.css']
})
export class ComfirmationComponent implements OnInit {
  totalprice:number
  name = ""
  constructor(private mycart: MycartService) {
    this.totalprice = this.mycart.totalprice
    this.name = this.mycart.name
   }

  ngOnInit(): void {
  }

}
