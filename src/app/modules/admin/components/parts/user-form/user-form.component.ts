import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Output()
  addUser = new EventEmitter<User>();

  // angular 14 and typed forms
  // FormGroup<User> ou FormGroup<Partial<User>>
  // https://angular.io/guide/typed-forms
  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    const u = this.userForm.value as User;
    // trigger and propagate event
    this.addUser.emit(u);
    this.userForm.reset();
    // reset all errors on form
    Object.keys(this.userForm.controls).forEach(key => {
      this.userForm.get(key)?.setErrors(null) ;
    });
  }

}
