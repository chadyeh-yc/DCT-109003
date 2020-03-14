import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit, OnDestroy {
  data: any = {};
  origBodyClass = '';
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.origBodyClass = document.body.className;
    document.body.className = 'bg-gradient-primary';

    // this.form = this.fb.group({
    //   email: 'chadyeh.yc@outlook.com',
    //   password: '123123123'
    // });

    this.form = this.fb.group({
      email: ['chadyeh.yc@outlook.com'],
      password: ['123123123'],
      isRemember: true
    });

    // this.form = this.fb.group({
    //   email: this.fb.control('chadyeh.yc@outlook.com'),
    //   password: this.fb.control('123123123')
    // });
  }

  ngOnDestroy(): void {
    document.body.className = this.origBodyClass;
  }
}
