import { Point } from 'geojson';
interface Mark {
  marker_name: string;
  description: string;
  location: Point;
  user: string;
  creation_date: Date;
}
interface OrderedMark extends Mark {
  placement: number
}

export {Mark, OrderedMark};
