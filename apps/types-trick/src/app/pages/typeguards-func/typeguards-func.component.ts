import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '@types-trick/ui-components';
import {
  Circle,
  Rectangle,
  Shape,
  ShapeType,
  Square,
} from '../../models/typeguards.model';

@Component({
  selector: 'types-trick-typeguards-func',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './typeguards-func.component.html',
  styleUrl: './typeguards-func.component.scss',
})
export class TypeguardsFuncComponent {
  shapeSquare: Shape = {
    id: 1,
    name: 'My square',
    kind: ShapeType.SQUARE,
    sideLength: 20,
  };

  shapeCircle: Shape = {
    id: 1,
    name: 'My circle',
    kind: ShapeType.CIRCLE,
    radius: 20,
  };

  shapeRectangle: Shape = {
    id: 1,
    name: 'My rectangle',
    kind: ShapeType.RECTANGLE,
    height: 20,
    width: 20,
  };

  clickShape = (shape: Shape) => {
    if (this.isSquare(shape)) {
      console.log('sideLength: ', shape.sideLength);
    } else if (this.isCircle(shape)) {
      console.log('radius: ', shape.radius);
    } else if (this.isRectangle(shape)) {
      console.log('width: ', shape.width, 'height: ', shape.height);
    }
  };

  assertShapeAsCircle = (shape: Shape) => {
    this.assertCircle(shape);
    console.log('assertion ok for Circle, radius is: ', shape.radius);
  };

  isSquare = (input: Shape): input is Square => input.kind === ShapeType.SQUARE;

  isCircle = (input: Shape): input is Circle => input.kind === ShapeType.CIRCLE;

  isRectangle = (input: Shape): input is Rectangle =>
    input.kind === ShapeType.RECTANGLE;

  assertCircle(shape: Shape): asserts shape is Circle {
    if (shape.kind !== ShapeType.CIRCLE) {
      throw new Error('shape is not a Circle');
    }
  }
}
