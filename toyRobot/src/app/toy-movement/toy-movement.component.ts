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
  constructor(private FBObject:FormBuilder) { }

  ngOnInit() {
    this.ToyDetails=this.FBObject.group({
      xCoordinate:[null,[Validators.required]],
      yCoordinate:[null,[Validators.required]],
      direction:[null,[Validators.required]],
   
    })  
    
  }

  leftMove(){
    alert("left is clicked")
  }
  rightMove(){
    
  }
  submit(){
    alert("submit is clicked");
    this.xCoordinate=this.ToyDetails.controls.xCoordinate.value;
    this.yCoordinate=this.ToyDetails.controls.yCoordinate.value;
    this.direction=this.ToyDetails.controls.direction.value;
  this.result()
  }

  result(){
    console.log("x"+this.xCoordinate)
    console.log("y"+this.yCoordinate)
    console.log("direction"+this.direction)
  }

}
