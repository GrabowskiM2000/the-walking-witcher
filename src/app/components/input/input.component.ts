import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { getValidationMessage } from '../../../_core/validators/validators';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() type: string = '';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() maxWidth: string = '';
  @Input() formControlNameValue: FormControl = new FormControl();
  public inputType: boolean = false;
  public error$: Subject<any> = new Subject(); //STRING BYŁO
  private subscription$: Subscription = new Subscription();

  constructor() {}

  ngOnInit(): void {
    this.handleChanges();
  }

  private handleChanges(): void {
    if (this.formControlNameValue) {
      this.subscription$.add(
        this.formControlNameValue.statusChanges.subscribe(() => this.getError())
      );
    }
  }

  private getError(): void {
    if (
      this.formControlNameValue.errors &&
      !this.formControlNameValue.errors.hasOwnProperty('required') &&
      this.formControlNameValue.value === ''
    ) {
      this.error$.next(undefined);
      return;
    }
    if (this.formControlNameValue.touched) {
      if (this.formControlNameValue.errors) {
        const key = Object.keys(this.formControlNameValue.errors)[0];
        this.error$.next(
          getValidationMessage(key, this.formControlNameValue.errors[key])
        );
      } else {
        this.error$.next(undefined);
      }
    }
  }
}
