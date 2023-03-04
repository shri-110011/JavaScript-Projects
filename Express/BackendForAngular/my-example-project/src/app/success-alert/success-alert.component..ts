import { Component } from "@angular/core";


@Component({
    selector: "app-success-alert",
    templateUrl: "./success-alert.component.html",
    styles: [`
        p{
            color: darkgreen;
            background-color: #b0e9b0;
            padding: 20px;
            border: 1px solid green;
        }
    `]
})
export class SuccessAlertComponent{

}