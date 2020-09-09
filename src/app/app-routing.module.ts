import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeworkComponent } from './components/homework/homework.component';
import { HomeworkOutletComponent } from './components/homework-outlet/homework-outlet.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'homework/:id', component: HomeworkComponent },
    { path: 'homeworks/:subject', component: HomeworkOutletComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }