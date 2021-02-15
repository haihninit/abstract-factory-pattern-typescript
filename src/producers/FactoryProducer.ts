import { AbstractFactory } from "../factories/AbstractFactory";
import { RoundedShapeFactory } from "../factories/RoundedShapeFactory";
import { ShapeFactory } from "../factories/ShapeFactory";

export class FactoryProducer {
    static getFactory(rounded: boolean): AbstractFactory {   
       if(rounded){
          return new RoundedShapeFactory();         
       }else{
          return new ShapeFactory();
       }
    }
 }