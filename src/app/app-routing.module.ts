import { LoginComponent } from './pages/login/login.component';
import { FichaComponent } from './pages/ficha/ficha.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login',  component: LoginComponent},
  {path: 'ficha',  component: FichaComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
