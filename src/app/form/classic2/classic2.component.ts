import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-classic2',
  templateUrl: './classic2.component.html',
  styleUrls: ['./classic2.component.css']
})
export class Classic2Component implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  data: any = {
    'name': 'Will',
    'sid': 'A123456789'
  };

  form: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      'name': ['Will', Validators.required],
      'sid': ['A123456789', [Validators.required
        , Validators.maxLength(10)
        , Validators.minLength(10)
        , VaildateSidFormat]],
      //表單設為陣列
      'addresses': this.fb.array([
        this.fb.control('Address1', Validators.required),
        this.fb.control('Address2', Validators.required)
      ])
    });
  }

  doSubmit() {
    console.log(this.form.value);
  }

  doReset() {
    this.form.reset(this.data);
  }

  AddAddress() {
    let addresses = (this.form.controls.addresses as FormArray);
    addresses.push(this.fb.control('Address' + (addresses.length + 1), Validators.required));
  }
}

function VaildateSidFormat(control: AbstractControl) {
  if (control.value[0] === 'A' && control.value[1] === '2') {
    return null;
  } else {
    return {
      sidFormat: true,
      error_message: '可傳入錯誤訊息，但比較少這樣使用'
    };
  }
}
