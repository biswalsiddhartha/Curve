import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-toy-movement',
  templateUrl: './toy-movement.component.html',
  styleUrls: ['./toy-movement.component.scss'],
})
export class ToyMovementComponent implements OnInit {

  ToyDetails:FormGroup
  xCoordinate:number
  yCoordinate:number
  direction:string
  minValue:number=0
  maxValue:number=4
  submitted:boolean=false
  isPositionSet:boolean=true
  isReportClicked:boolean=false
  constructor(private FBObject:FormBuilder) { }

  ngOnInit() {
    this.ToyDetails=this.FBObject.group({
      xCoordinate:[null,[Validators.required]],
      yCoordinate:[null,[Validators.required]],
      direction:[null,[Validators.required]],
   
    })  
    
  }

move(){
  if(this.direction=="EAST"){
    if(this.xCoordinate==this.maxValue){
      this.xCoordinate=this.maxValue
    }
    else{
      this.xCoordinate++
    }

  }
  else if(this.direction=="WEST"){
    if(this.xCoordinate==this.minValue){
      this.xCoordinate=this.minValue
    }
    else{
      this.xCoordinate--
    }
  }
  else if(this.direction=="NORTH"){
    if(this.yCoordinate==this.maxValue){
      this.yCoordinate=this.maxValue
    }
    else{
      this.yCoordinate++
    }
  }
  else if(this.direction=="SOUTH"){
    if(this.yCoordinate==this.minValue){
      this.yCoordinate=this.minValue
    }
    else{
      this.yCoordinate--
    }
  }


}

  leftMove(){
    if(this.direction=="EAST"){
      this.direction="NORTH"
    }
    else if(this.direction=="WEST"){
      this.direction="SOUTH"
    }
    else if(this.direction=="NORTH"){
      this.direction="WEST"
    }
    else if(this.direction=="SOUTH"){
      this.direction="EAST"
    }
  }
  rightMove(){
    if(this.direction=="EAST"){
      this.direction="SOUTH"
    }
    else if(this.direction=="WEST"){
      this.direction="NORTH"
    }
    else if(this.direction=="NORTH"){
      this.direction="EAST"
    }
    else if(this.direction=="SOUTH"){
      this.direction="WEST"
    }

  }
  submit(){
    this.submitted = true;
    
    if(this.ToyDetails.invalid){
      return

    }
    else{
      this.isPositionSet=false
      alert("submitted sucessfully")
      this.xCoordinate=this.ToyDetails.controls.xCoordinate.value;
      this.yCoordinate=this.ToyDetails.controls.yCoordinate.value;
      this.direction=this.ToyDetails.controls.direction.value;
    this.result()

    }
    
  }

  result(){
    console.log("x"+this.xCoordinate)
    console.log("y"+this.yCoordinate)
    console.log("direction"+this.direction)
  }

  report(){
    this.isReportClicked=true

  }
  closeReport(){
    this.isReportClicked=false
  }

}
