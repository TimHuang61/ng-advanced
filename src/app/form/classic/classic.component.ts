import { Component, OnInit } from '@angular/core';
import { NgForm, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {

  data: any = {
    name: 'Tim',
    id: 'A123456789'
  };

  ngOnInit() {
  }

  doSumbit(f: NgForm) {
    // ngform can not get error 
    console.log(f.errors);

    console.log(f.controls);

    console.log(f.value);
  }

  doReset(f: NgForm) {
    console.log(f.form.controls.secret);
    f.reset(this.data);
  }

  test() {
    console.log('test');
  }
}
