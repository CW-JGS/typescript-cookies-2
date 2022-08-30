import { Colours } from "./Colours";

export class Cookie {
  name: string;
  colour : Colours;
  chocolateChipNum;
  constructor(_paramName: string) {
    this.name = _paramName;
    this.colour = Colours.Brown;
    this.chocolateChipNum = 0;
  }
}
