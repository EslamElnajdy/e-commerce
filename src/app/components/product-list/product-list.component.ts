import { MycartService } from './../../services/mycart.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  datafinal:Array<any> = []
  
  constructor(private http: GetDataService, private router: Router,
     private mycart: MycartService) { }

  ngOnInit(): void {
    this.http.getdata().subscribe(data => {
      this.datafinal = data
      
    })
  }
  route(i:number){
    this.router.navigate(['my-product-details',i])

  }

  add(it: object,invalue: any){
    this.mycart.addingData(it,invalue) 
  }
  ngOnDestroy(){
    this.mycart.savecartdata()
  }
  
}
