import { IShape } from "../interfaces/IShape";

export class Square implements IShape {
    draw(){
        console.log("Inside Square::draw() method.")
    }
}