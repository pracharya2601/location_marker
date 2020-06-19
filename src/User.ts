import faker from 'faker';
// need type defination file for faker
// search @types/packagename on npmjs.com

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()), //converting into number
      lng: parseFloat(faker.address.longitude()), // converting into number
    };
  }

  markerContent(): string {
    return `User Name is ${this.name}`;
  }
}
