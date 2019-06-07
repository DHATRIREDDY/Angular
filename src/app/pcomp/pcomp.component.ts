import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pcomp',
  template: '<h2> welcome {{name}}</h2><h2 class="ps"> To world cup</h2><h2 [class]="sclass">To world cup</h2><h2  [class.pr]="error">To world cup</h2><h2 [ngClass]="mssg">To world cup</h2>',
  styles: ['.ps{color:blue;} .pr{color:brown;} .pt{font-style:italic;}']
})
export class PcompComponent implements OnInit {
  public name="Aditi";
  public sclass="ps";
  public error="false";
  public sps="true";
  public mssg={
    "ps":!this.error,
    "pr":this.error,
    "pt":this.sps
  }
  constructor() { }

  ngOnInit() {
  }

}
