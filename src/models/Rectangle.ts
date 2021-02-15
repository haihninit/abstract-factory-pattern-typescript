import { IShape } from "../interfaces/IShape";

export class Rectangle implements IShape {
    draw(){
        console.log("Inside Rectangle::draw() method.")
    }
}