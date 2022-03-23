import { Component} from '@angular/core';
import { FormArray, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';


@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent {
  formComponent: FormGroup
  displayInfoTable: boolean = false

  constructor(private fb: FormBuilder) {

    this.formComponent = this.fb.group({
      lastName: ['', [Validators.required, Validators.pattern(/[А-я]/)]],
      firstName: ['', [Validators.required, Validators.pattern(/[А-я]/)]],
      middleName: ['', [Validators.pattern(/[А-я]/)]],
      email: ['', [Validators.email]],
      AllSkills: this.fb.array([])
    })
  }

  get AllSkills() {
    return this.formComponent.get('AllSkills') as FormArray;
  }

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  skills: any = [{name: 'Жизнерадостность'}, {name: 'Заинтересованность'}, {name: 'Интеллект'}];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.AllSkills.push(this.fb.control(`${event.value}`))
      this.skills.push({name: value});
    }
    event.chipInput!.clear();
  }
  remove(skill: any): void {
    const index = this.skills.indexOf(skill);
    if (index >= 0) {
      this.skills.splice(index, 1);
      this.AllSkills.removeAt(index);
    }
  }
  ngOnInit() {}
  isControlInvalid(controlName: string): boolean {
    const control = this.formComponent.controls[controlName]
    const result = control.invalid && control.touched
    return result;
  }
  onSubmit() {
    this.displayInfoTable = true
  }
  onClear() {
    this.displayInfoTable = false
    this.formComponent.reset()
  }

}
  