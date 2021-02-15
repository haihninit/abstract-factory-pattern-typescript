import { IShape } from "../interfaces/IShape";

export class RoundedRectangle implements IShape {
    draw(){
        console.log("Inside RoundedRectangle::draw() method.")
    }
}