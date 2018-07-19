import { NgModule } from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';

import { NewmessageComponent} from './component/newmessage/newmessage.component';
import { HomeComponent} from './component/home/home.component';
import { LoginComponent} from './component/login/login.component';
import { RegisterComponent} from './component/register/register.component';
import { ProfileComponent} from './component/profile/profile.component';
// import { NavbarComponent} from './component/navbar/navbar.component';
import { MessageComponent} from './component/message/message.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'messages/:user',
    component: MessageComponent
  },
  {
    path: 'messages',
    component: MessageComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {

}
