import { IShape } from "../interfaces/IShape";
import { Rectangle } from "../models/Rectangle";
import { Square } from "../models/Square";
import { AbstractFactory } from "./AbstractFactory";

export class ShapeFactory extends AbstractFactory {
	
    //use getShape method to get object of type shape 
    getShape(shapeType: string): IShape | null {
       if(shapeType == null){
          return null;
       }		
      if(shapeType === "RECTANGLE"){
          return new Rectangle(); 
       } else if(shapeType === "SQUARE"){
          return new Square();
       }
       return null;
    }
 }