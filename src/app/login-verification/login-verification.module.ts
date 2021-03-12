import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginVerificationPageRoutingModule } from './login-verification-routing.module';

import { LoginVerificationPage } from './login-verification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginVerificationPageRoutingModule
  ],
  declarations: [LoginVerificationPage]
})
export class LoginVerificationPageModule {}
