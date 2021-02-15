import { IShape } from './interfaces/IShape';
import { AbstractFactory } from "./factories/AbstractFactory";
import { FactoryProducer } from "./producers/FactoryProducer";

//get shape factory
const shapeFactory: AbstractFactory = FactoryProducer.getFactory(false);
//get an object of Shape Rectangle
const shape1: IShape | null = shapeFactory.getShape("RECTANGLE");
//call draw method of Shape Rectangle
shape1?.draw();
//get an object of Shape Square 
const shape2: IShape | null = shapeFactory.getShape("SQUARE");
//call draw method of Shape Square
shape2?.draw();
//get shape factory
const shapeFactory1: AbstractFactory = FactoryProducer.getFactory(true);
//get an object of Shape Rectangle
const shape3: IShape | null = shapeFactory1.getShape("RECTANGLE");
//call draw method of Shape Rectangle
shape3?.draw();
//get an object of Shape Square 
const shape4: IShape | null = shapeFactory1.getShape("SQUARE");
//call draw method of Shape Square
shape4?.draw();