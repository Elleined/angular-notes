import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = formBuilder.group({
      informationGroup: formBuilder.group({
        nameControl: ['', Validators.required],
        ageControl: ['', Validators.required]
      }),
      addressGroup: formBuilder.group({
        provinceControl: ['', Validators.required],
        cityControl: ['', Validators.required],
        baranggayControl: ['', Validators.required]
      })
    });
  }
  
  nestedFormOnSubmit(): void {
    console.log(this.registerForm.value);
  }
  
}
