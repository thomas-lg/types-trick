import { Circle, Rectangle, Square } from './typeguards.model';
import { PartialBy } from './utils.model';

export type ShapeInput =
  | PartialBy<Circle, 'id'>
  | PartialBy<Square, 'id'>
  | PartialBy<Rectangle, 'id'>;
