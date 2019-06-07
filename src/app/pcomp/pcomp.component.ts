import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pcomp',
  templateUrl: '<h2> welcome {{name}}</h2> To world cup<h2>',
  styleUrls: ['.ps{color:blue;} .pr{color:pink;} .pt{color:ALGERIAN;}']
})
export class PcompComponent implements OnInit {
  public name="Aditi";

  constructor() { }

  ngOnInit() {
  }

}
