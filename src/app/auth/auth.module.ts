import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInService } from './signin.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [SignInService]
})
export class AuthModule { }
