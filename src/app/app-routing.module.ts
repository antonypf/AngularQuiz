import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',redirectTo:'welcome',pathMatch:"full"},
  {path:'welcome',component:WelcomeComponent},
  { path: 'registartion', component: RegistrationComponent },
  {
    path: 'start-quiz',
    loadChildren: () => import('./start-quiz/start-quiz.module').then(m => m.StartQuizModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
