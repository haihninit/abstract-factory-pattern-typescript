import { RoundedSquare } from './../models/RoundedSquare';
import { RoundedRectangle } from './../models/RoundedRectangle';
import { IShape } from "../interfaces/IShape";
import { AbstractFactory } from "./AbstractFactory";

export class RoundedShapeFactory extends AbstractFactory {
	
    //use getShape method to get object of type shape 
    getShape(shapeType: string): IShape | null {
       if(shapeType == null){
          return null;
       }		
      if(shapeType === "RECTANGLE"){
          return new RoundedRectangle(); 
       } else if(shapeType === "SQUARE"){
          return new RoundedSquare();
       }
       return null;
    }
 }