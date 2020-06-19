import faker from 'faker';
// need type defination file for faker

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `
    <div>
      <h2>Company name: ${this.companyName}</h2>
      <h3>Catch Phrase: ${this.catchPhrase}</h3>
    </div>
    `;
  }
}
