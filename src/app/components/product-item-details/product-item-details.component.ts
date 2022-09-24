import { MycartService } from './../../services/mycart.service';
import { GetDataService } from './../../services/get-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {

  products:Array<any>= []
  index:any;

  constructor(private activedroute: ActivatedRoute,private http: GetDataService,
     private mycart: MycartService ) { 

    this.activedroute.paramMap.subscribe( urlid => this.index = urlid.get('id'))
    console.log(this.index);
    
  }

  ngOnInit(): void {
     this.http.getdata().subscribe(data => this.products =data)
  }
 add(it: object, invalue: any){
  this.mycart.addingData(it,invalue)
 }

}
