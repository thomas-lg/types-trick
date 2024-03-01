export enum ShapeType {
  CIRCLE,
  SQUARE,
  RECTANGLE,
}

export interface ShapeObj {
  id: number;
  name: string;
}

export interface Circle extends ShapeObj {
  kind: ShapeType.CIRCLE;
  radius: number;
}

export interface Square extends ShapeObj {
  kind: ShapeType.SQUARE;
  sideLength: number;
}

export interface Rectangle extends ShapeObj {
  kind: ShapeType.RECTANGLE;
  width: number;
  height: number;
}

export type Shape = Circle | Square | Rectangle;
