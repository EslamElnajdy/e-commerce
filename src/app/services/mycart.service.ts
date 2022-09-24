import { Product } from './../interfaces/product';

import { Injectable } from '@angular/core';

@Injectable()
export class MycartService {

 mycartdata: Array<Product> = []
 totalprice:number=0;
 name:string=""

  constructor() {
    let data = localStorage.getItem('datadase')
    
    if(data){
      this.mycartdata = JSON.parse(data)
    }else{
      this.mycartdata = []
    }
    
   }
  

  addingData(dataitem: any ,invalue:number ){
    var test = false
    if(this.mycartdata.length !== 0){
      
      for(let ele of this.mycartdata ){
        if(ele.id === dataitem.id ){
          if( +ele.amount + +invalue <= 10){
          ele.amount = (+ele.amount) + (+invalue)
          test = true
          alert("adding in your cart")
          
          }else {
            alert("the quantity isn't suitable")
            test = true
          }
        }}
        if(test == false){
          let obcart = {
            "id":dataitem.id,
            "url": dataitem.url,
            "price": dataitem.price,
            "name": dataitem.name,
            "amount": invalue
          }
          this.mycartdata.push(obcart)
          alert("adding in your cart")
          
        }  
    }
    if(this.mycartdata.length === 0){
        let obcart = {
          "id":dataitem.id,
          "url": dataitem.url,
          "price": dataitem.price,
          "name": dataitem.name,
          "amount": invalue
        }
        this.mycartdata.push(obcart)
        alert("adding in your cart")
        
        
      }
      
    }
      
  savecartdata(){
    localStorage.setItem("datadase",JSON.stringify(this.mycartdata))
  }
  
  deletedata(i:number){
    this.mycartdata.splice(i,1)
    this.savecartdata()
  }
}
