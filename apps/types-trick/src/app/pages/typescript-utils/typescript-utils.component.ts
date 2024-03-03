import { Component } from '@angular/core';
import {
  Circle,
  Rectangle,
  Shape,
  ShapeType,
  Square,
} from '../../models/typeguards.model';
import { PartialBy } from '../../models/utils.model';

type ShapeInput =
  | PartialBy<Circle, 'id'>
  | PartialBy<Square, 'id'>
  | PartialBy<Rectangle, 'id'>;
type ShapeExclude = Exclude<Shape, Rectangle>;
type ShapeRequired = Required<ShapeInput>;
type ShapeRecord = Record<string, Shape>;

@Component({
  selector: 'types-trick-typescript-utils',
  standalone: true,
  templateUrl: './typescript-utils.component.html',
  styleUrl: './typescript-utils.component.scss',
})
export class TypescriptUtilsComponent {
  shape: Shape = {
    id: 1,
    kind: ShapeType.CIRCLE,
    name: 'My circle',
    radius: 20,
  };

  shapeInput: ShapeInput = {
    kind: ShapeType.CIRCLE,
    name: 'My input circle',
    radius: 20,
  };

  typeShapeExclude: ShapeExclude = {
    id: 1,
    name: 'My exclude circle',
    kind: ShapeType.CIRCLE,
    radius: 20,
  };

  typeShapeRequired: ShapeRequired = {
    id: 1,
    name: 'My required circle',
    kind: ShapeType.CIRCLE,
    radius: 20,
  };

  typeShapeRecords: ShapeRecord = {
    circle: {
      id: 1,
      name: 'My record circle',
      kind: ShapeType.CIRCLE,
      radius: 20,
    },
  };

  display: { type: string; description: string }[] = [
    {
      type: 'Shape',
      description: 'type Shape = Circle | Square | Rectangle',
    },
    {
      type: 'ShapeInput',
      description: `type ShapeInput = PartialBy<Circle, 'id'> | PartialBy<Square, 'id'> | PartialBy<Rectangle, 'id'>;`,
    },
    {
      type: 'ShapeExclude',
      description: 'type ShapeExclude = Exclude<Shape, X>',
    },
    {
      type: 'ShapeRequired',
      description: 'type Shape = Circle | Square | Rectangle',
    },
    {
      type: 'ShapeRecord',
      description: 'type Shape = Circle | Square | Rectangle',
    },
  ];
}
