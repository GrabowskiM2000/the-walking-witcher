import {FormGroup, FormControl, FormArray} from '@angular/forms';
import {AbstractControl} from '@angular/forms';

export function getValidationMessage(validator?: string, validatorValue?: any): string {
    const messages = {
        matchPassword: 'Hasła się różnią',
        required: 'Wymagane',
        email: 'Email jest nieprawidłowy',
        minlength: 'Min długość: ' + validatorValue.requiredLength,
        maxlength: 'Max długość: ' + validatorValue.requiredLength,
        pattern: 'Hasło jest nieprawidłowe',
    };
    // @ts-ignore
    return messages[validator];
}

export function validateAllFormFields(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl || (control instanceof FormArray && !(control.controls.length > 0))) {
            control.markAsTouched({onlySelf: true});
            control.updateValueAndValidity({onlySelf: true});
        } else if ((control instanceof FormGroup) || (control instanceof FormArray)) {
            validateAllFormFields(control);
        }
    });
    formGroup.updateValueAndValidity();
}

export function email(AC: AbstractControl) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (AC.value === null) {
        return null;
    }
    return AC.value.indexOf('@') > 64 || AC.value.length > 255 || !regex.test(AC.value) ? {'email': true} : null;
}

export function confirmPasswordValidator(FG: FormGroup): void | null {
    const password = FG.get('password')?.value;
    const passwordConfirm = FG.get('passwordConfirm')?.value;
    if (password && passwordConfirm) {
        if (password !== passwordConfirm) {
            FG.get('passwordConfirm')?.markAsTouched({onlySelf: true});
            FG.get('passwordConfirm')?.setErrors({matchPassword: true});
        } else {
            return null;
        }
    }
}
