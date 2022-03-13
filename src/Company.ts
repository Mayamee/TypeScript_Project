import faker from "faker";
import { Mappable } from "./CustomMap";
export class Company implements Mappable {
  companyName: string;
  companyCatchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.companyName = faker.company.companyName();
    this.companyCatchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  getMarkerContent(): string {
    return `<div><h2>${this.companyName}</h2><h3>${this.companyCatchPhrase}</h3></div>`;
  }
}
