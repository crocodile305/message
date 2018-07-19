import { Component, OnInit } from '@angular/core';
import {}
import { FormControl , FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-newmessage',
  templateUrl: './newmessage.component.html',
  styleUrls: ['./newmessage.component.scss']
})
export class NewmessageComponent implements OnInit {
  newMessageForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.newMessageForm = new FormGroup(
      {
        'name': new FormControl(null, Validators.required),
        'text': new FormControl(null, Validators.required)
      }
    );
  }
  onSubmit() {

  }

}
