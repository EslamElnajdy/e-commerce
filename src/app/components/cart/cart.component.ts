
import { MycartService } from './../../services/mycart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  fdata: Array<any> = [];
  
  constructor(private mycart: MycartService){
    let localdata = localStorage.getItem("newchange")
    if(localdata){
      let fromlocal = JSON.parse(localdata)
      if(fromlocal.length < this.mycart.mycartdata.length){
        fromlocal.push(this.mycart.mycartdata[this.mycart.mycartdata.length-1])
        this.fdata = fromlocal
        this.savechange
      }else{
        
        this.fdata = this.mycart.mycartdata
        this.savechange
      }
    }else{
      this.fdata = this.mycart.mycartdata
      this.savechange
    }
   }
   
  ngOnInit(): void {
    
  }
 
  change(inputvalue:any,index:any){
    this.mycart.mycartdata[index].amount = +inputvalue
    this.mycart.savecartdata()
  }
  savechange(){
    localStorage.setItem("newchange",JSON.stringify(this.fdata))
  }
  remove(){
    localStorage.removeItem("newchange")
  }
  delete(i:number){
    this.mycart.deletedata(i)
  }
  price(){
    var pr=0
    for(let dp of this.fdata){
       pr += (dp.price * dp.amount)
    }
    return pr;
  }
  done(eventname:any){
    this.mycart.name = eventname
  }

}
