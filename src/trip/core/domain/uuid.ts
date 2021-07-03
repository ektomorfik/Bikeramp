import { v4 } from 'uuid';

export class Uuid {
  public readonly value: string;
  static new(): Uuid {
    return new Uuid(v4());
  }
  private constructor(uuid: string) {
    this.value = uuid;
  }
}
