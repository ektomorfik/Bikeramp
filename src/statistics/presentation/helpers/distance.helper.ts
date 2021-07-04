export class DistanceHelper {
  static format(distance: number, unit: string): string {
    return `${distance.toFixed(2)}${unit}`;
  }
}
