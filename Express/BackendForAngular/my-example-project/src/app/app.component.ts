import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [`
    .styleLog{
      color: white;
    }
  `]
})
export class AppComponent {
  username = "";
  nameCreationStatus = false;

  secretMsg = "I am learning Angular.";
  msgVisibility = false;
  arr = [];
  updateBtnStatus(){
    if(this.username.length!=0){
      this.nameCreationStatus = true;
    }
    else{
      this.nameCreationStatus = false;
    }
  }
  resetName(){
    this.username="";
  }
  toggleMsg(){
    // this.arr.push(this.arr.length+1);
    this.arr.push(new Date);
    this.msgVisibility = !this.msgVisibility;
  }
}
