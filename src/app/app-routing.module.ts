import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
//import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-profile', pathMatch: 'full' },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'user-profile', component: UserProfileComponent },
  //{ path: 'menu', component: MenuComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  /*imports: [
    CommonModule
  ],
  declarations: []*/
})
export class AppRoutingModule { }
