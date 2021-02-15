import { IShape } from "../interfaces/IShape";

export abstract class AbstractFactory {
    abstract getShape(shapeType: string): IShape | null;
}