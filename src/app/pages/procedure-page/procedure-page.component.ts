import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procedure-page',
  templateUrl: './procedure-page.component.html',
  styleUrls: ['./procedure-page.component.css']
})
export class ProcedurePageComponent implements OnInit {

  active = 'top';
  
  constructor() { }

  ngOnInit(): void {
  }

}
