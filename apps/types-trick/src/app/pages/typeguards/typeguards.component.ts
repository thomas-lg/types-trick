import { Component, OnInit } from '@angular/core';
import { Shape, ShapeType } from '../../models/typeguards.model';

type ShapeWithArea = Shape & { area: number };

@Component({
  selector: 'types-trick-typeguards',
  standalone: true,
  templateUrl: './typeguards.component.html',
  styleUrl: './typeguards.component.scss',
})
export class TypeguardsComponent implements OnInit {
  shapeTypeEnum = ShapeType;
  shapes: Shape[] = [
    {
      id: 1,
      kind: ShapeType.CIRCLE,
      name: 'My circle',
      radius: 30,
    },
    {
      id: 2,
      kind: ShapeType.RECTANGLE,
      name: 'My rectangle',
      height: 40,
      width: 100,
    },
    {
      id: 3,
      kind: ShapeType.SQUARE,
      name: 'My square',
      sideLength: 40,
    },
    {
      id: 4,
      kind: ShapeType.RECTANGLE,
      name: 'My rectangle',
      height: 120,
      width: 50,
    },
  ];

  shapesWithArea: ShapeWithArea[] = [];

  ngOnInit(): void {
    this.shapesWithArea = this.shapes.map((s) => ({
      ...s,
      area: this.getArea(s),
    }));
  }

  getArea = (shape: Shape): number => {
    if (shape.kind === ShapeType.CIRCLE) {
      return Math.PI * shape.radius ** 2;
    } else if (shape.kind === ShapeType.SQUARE) {
      return shape.sideLength ** 2;
    } else if (shape.kind === ShapeType.RECTANGLE) {
      return shape.width * shape.height;
    } else {
      return 0;
    }
  };
}
