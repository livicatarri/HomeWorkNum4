import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  form = new FormGroup({
    temp1: new FormControl(null, Validators.required),
    temp2: new FormControl(true, Validators.required),
    temp3: new FormControl(true, Validators.required),
    temp4: new FormControl(null, [Validators.required])
  })
}
