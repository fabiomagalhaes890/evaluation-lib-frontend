import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBookComponent } from './list-book/list-book.component';
import { RegisterBookComponent } from './register-book/register-book.component';

const appRoutes: Routes = [
  { path: 'list-book', component: ListBookComponent },
  { path: 'register-book', component: RegisterBookComponent},
  { path: 'register-book/:id', component: RegisterBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
