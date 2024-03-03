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

  get shapeTypeEnum() {
    return ShapeType;
  }

  ngOnInit(): void {
    this.shapesWithArea = this.shapes.map((s) => ({
      ...s,
      area: this.getArea(s),
    }));
  }

  getArea = (shape: Shape): number => {
    switch (shape.kind) {
      case ShapeType.CIRCLE:
        return Math.PI * shape.radius ** 2;
      case ShapeType.SQUARE:
        return shape.sideLength ** 2;
      case ShapeType.RECTANGLE:
        return shape.width * shape.height;
      default:
        return 0;
    }
  };
}
