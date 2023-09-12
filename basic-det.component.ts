import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../common/services/login.service';

@Component({
  selector: 'app-basic-det',
  templateUrl: './basic-det.component.html',
  styleUrls: ['./basic-det.component.scss']
})

export class BasicDetComponent implements OnInit {
  basicDetForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private BasicDetService: LoginService,private router: Router) {
    this.basicDetForm = this.formBuilder.group({
      firstname: ["", Validators.compose([Validators.required])],
      lastname: ["", Validators.compose([Validators.required])],
      email: ["", Validators.compose([Validators.required])],
      gender: ["", Validators.compose([Validators.required])],
      phone: ["", Validators.compose([Validators.required])],
      dob: ["", Validators.compose([Validators.required])]
      
    });
  }
  ngOnInit() {

  }
  onSubmit() {
    const payload = {
      firstname: this.basicDetForm.value.firstname,
      lastname: this.basicDetForm.value.lastname,
      email: this.basicDetForm.value.email,
      gender: this.basicDetForm.value.gender,
      phone: this.basicDetForm.value.phone,
      dob: this.basicDetForm.value.dob
    }
  }

}
