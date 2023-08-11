import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html',
})
export class BoardFormComponent implements OnInit {
  form = this.formBuilder.group({
    title: [''],
    backgroundColor: [''],
  });
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {}
  doSave() {
    if (this.form.valid) {
      const { title, backgroundColor } = this.form.getRawValue();
      console.log(title, backgroundColor);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
