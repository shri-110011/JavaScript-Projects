import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styles: [`
    p{
        color: red;
        background-color: mistyrose;
        padding: 20px;
        border: 1px solid red;
    }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
