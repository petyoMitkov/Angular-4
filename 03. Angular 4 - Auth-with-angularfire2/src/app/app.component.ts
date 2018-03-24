import { Component } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email: string;
  password: string;
  res = null;

  constructor(public afAuth: AngularFireAuth) {
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  // Email & Pass
  emailNewUser() {
    console.log(this.email);
    console.log(this.password);
    this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
      /*.then(res => alert(`
          The account with email ${res.email} is created successful!
      `))*/
      .then(res => {
        this.res = res.email
        this.clearInput();
      })
      .catch(err => alert(err));
  }

  emailLogin() {
    console.log(this.email);
    console.log(this.password);
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password);
    this.clearInput();
  }

  emailLogout() {
    this.afAuth.auth.signOut();
  }

  clearInput() {
    this.email = null;
    this.password = null;
  }
}
