import { Point } from "geojson";
class Marker {
  private marker_name: string;
  private description: string;
  private location: Point;
  private user: string;
  private creation_date: Date;

  constructor(
    marker_name: string,
    description: string,
    location: Point,
    user: string,
    creation_date: Date
  ) {
    this.marker_name = marker_name;
    this.description = description;
    this.location = location;
    this.user = user;
    this.creation_date = creation_date;
  }

  // Getter methods
  getMarkerName(): string {
    return this.marker_name;
  }

  getDescription(): string {
    return this.description;
  }

  getLocation(): Point {
    return this.location;
  }

  getUser(): string {
    return this.user;
  }

  getCreationDate(): Date {
    return this.creation_date;
  }

  // Setter methods
  setMarkerName(marker_name: string): void {
    this.marker_name = marker_name;
  }

  setDescription(description: string): void {
    this.description = description;
  }

  setLocation(location: Point): void {
    this.location = location;
  }

  setUser(user: string): void {
    this.user = user;
  }

  setCreationDate(creation_date: Date): void {
    this.creation_date = creation_date;
  }
}

export default Marker;
