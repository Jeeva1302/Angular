import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  ngOnInit() 
  {
    let counter = 1;
    setInterval(() => {
      const radioElement = document.getElementById('radio' + counter) as HTMLInputElement;
      if (radioElement) {
        radioElement.checked = true;
        counter++;
        if (counter > 4) {
          counter = 1;
        }
      }
    }, 4000);
  }

}
