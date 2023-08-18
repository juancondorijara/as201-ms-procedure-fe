import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.css']
})
export class PersonPageComponent implements OnInit {

  active = 'top';

  constructor() { }

  ngOnInit(): void {
  }

}
