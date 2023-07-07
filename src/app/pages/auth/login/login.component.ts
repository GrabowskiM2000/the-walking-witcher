import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  validateAllFormFields,
  email,
} from '../../../../_core/validators/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  public loginForm = this.fb.group({
    email: [null, [Validators.required, email]],
    password: [null, [Validators.required]],
  });

  //BRAKUJE TUTAJ SUBMIT_FORM()
}
