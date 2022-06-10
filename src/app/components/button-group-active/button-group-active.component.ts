import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-group-active',
  templateUrl: './button-group-active.component.html',
  styleUrls: ['./button-group-active.component.css']
})
export class ButtonGroupActiveComponent implements OnInit {

  isValue: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  english() { this.isValue = 1; }
  chinese() { this.isValue = 2; }
}
