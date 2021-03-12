import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginVerificationPage } from './login-verification.page';

const routes: Routes = [
  {
    path: '',
    component: LoginVerificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginVerificationPageRoutingModule {}
