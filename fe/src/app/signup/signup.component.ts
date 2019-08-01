import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  signupForm: any;
  constructor(private formBuilder: FormBuilder, private auth: AuthService) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: this.formBuilder.control("", Validators.required),
      email: this.formBuilder.control("", Validators.required),
      password: this.formBuilder.control("", Validators.required)
    });
  }

  get formControls() {
    return this.signupForm.controls;
  }

  onSignupSubmit() {
    // console.log(this.signupForm.value);
    this.auth.signUp(this.signupForm.value).subscribe(res => {
      console.log(res);
    });
  }
}
