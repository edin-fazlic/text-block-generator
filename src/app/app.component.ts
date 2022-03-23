import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  id: number=0;
  name: string='';
  color: string='';
  style: string='';
  case: string='';

  check: boolean=false;

  elements: Array<any> =[];
  
  checked(){
    if(this.check==false) this.check=true; else this.check=false;
  }

  putred():void{
      this.color='red';
  }

  putgreen():void{
      this.color='green';
  }

  putblue():void{
    this.color='blue';
  }

  putbold():void{
    this.style='bold';
  }

  putitalic():void{
    this.style='italic';
  }

  putupper():void{
    this.case='uppercase';
  }

  putlower():void{
    this.case='lowercase';
  }

  delete(key: number):void{
    this.elements.forEach((element,index)=>{
      if(element.id==key) this.elements.splice(index,1);
    });
  }

  functionname(newtext: any):void{
      this.name=newtext.value;
  }

  addtoarry():void{
      this.elements.push({
        id: this.id,
        name: this.name,
        color: this.color,
        style: this.style,
        case: this.case,
      })

      this.id++;
      this.color='';
      this.style='';
      this.case='';
  }
}
