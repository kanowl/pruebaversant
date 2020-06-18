import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
const alertCtrl = document.querySelector('ion-alert-controller');

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 
  user = {
    email: '',
    password: ''
  }
    constructor(private router: Router,
              public ngFireAuth: AngularFireAuth) { }
  ngOnInit() { 
  }
  
  logMeIn () {
    //code for loggin in user goes here
    this.router.navigate(['/home'])
   }

  async login () {
    const user = await this.ngFireAuth.signInWithEmailAndPassword(this.user.email, this.user.password);
    console.log(user);

    if (user.user.email) {
      this.router.navigate(['/home']);
    } else {
      alert('Login failed!');
    }
  }

  async register () {
    const user = await this.ngFireAuth.createUserWithEmailAndPassword(this.user.email, this.user.password);

    console.log(user);

    if (user.user.email) {
      alert('Registration successful!');
    } else {
      alert('Registration failed!')
    }
}
}