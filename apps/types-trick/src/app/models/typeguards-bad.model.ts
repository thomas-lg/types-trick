export enum ShapeTypeBad {
  CIRCLE,
  SQUARE,
  RECTANGLE,
}

export interface ShapeObjBad {
  id: number;
  kind: ShapeTypeBad;
  name: string;
  radius?: number;
  sideLength?: number;
  width?: number;
  height?: number;
}
