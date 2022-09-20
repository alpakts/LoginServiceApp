import { Component, OnInit } from '@angular/core';
import {  NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LoginServiceApp';
  constructor(private spinner:NgxSpinnerService){}
  ngOnInit(): void {
    
    this.spinner.show("a1");
    setTimeout(() => {
      this.spinner.hide("a1")
    }, 1000);
  }
  n
}
