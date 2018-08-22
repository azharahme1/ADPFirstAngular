import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './app.secondcomponent.component.html',
  styleUrls: [
    './app.secondcomponent.component.css',
    '../../../node_modules/font-awesome/css/font-awesome.min.css',
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  ]
})
export class AppSecondComponent implements OnInit {

  name: string;
  actor: string;
  persons: string[];
  query: string;
  secondList: string[];
  showFlag: boolean;
  btnText: string;
  vegetables: any[];
  tempVeg: any;
  selectedIndex: number;

  constructor() { 
    this.name = 'Lionel Messi';
    this.actor = '';
    this.persons = [
      'Kamal Hasan',
      'Amitabh Bachhan',
      'Kareena Kapoor',
      'Deepika',
      'Rajnikant'
    ];
    this.query = '';
    this.secondList = this.persons.slice();
    this.showFlag = false;
    this.btnText = 'Show List';

    this.vegetables = [
      {name: 'Tomato', price: 25},
      {name: 'Bottle Gourd', price: 20},
      {name: 'Radish', price: 35},
      {name: 'Potato', price: 20}
    ];

    this.selectedIndex = -1;
    this.tempVeg = Object.assign({}, this.vegetables[this.selectedIndex]);;
  }

  ngOnInit() {
  }

  onButtonClick() {
    this.persons.push(this.actor);
  }

  deletePerson(actor) {
    const index: number = this.persons.findIndex(person => person === actor);
    this.persons.splice(index, 1);
  }

  queryPerson() {
    this.query = this.query.trim();
    if (this.query.length === 0) { 
      this.secondList = this.persons.slice();
    }  else {
      this.secondList =  this.persons.filter((item) => item.match(this.query));
    }
  }

  toggleList() {
    this.showFlag = !this.showFlag;
    this.btnText = this.showFlag ? 'Hide List' : 'Show List';
  }

  editVeggie(veggie, ndx) {
    this.selectedIndex = ndx;
    this.tempVeg = {
      name: this.vegetables[ndx].name,
      price: this.vegetables[ndx].price
    };
  }

  deleteVeggie(ndx) {
    this.vegetables.splice(ndx, 1);
    this.selectedIndex = -1;
  }

  saveVeggie(ndx) {
    this.selectedIndex = -1;
    // this.vegetables.splice(ndx, 1, Object.assign({}, this.tempVeg));
    this.vegetables.splice(ndx, 1, {name: this.tempVeg.name, price: this.tempVeg.price});
  }

  cancelEdit() {
    this.selectedIndex = -1;
  }
}
