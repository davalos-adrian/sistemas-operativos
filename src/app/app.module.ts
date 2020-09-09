import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeworkComponent } from './components/homework/homework.component';
import { HomeworkOutletComponent } from './components/homework-outlet/homework-outlet.component';
import { HomeComponent } from './components/home/home.component';
import { HomeworkService } from './services/homework.service'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeworkComponent,
    HomeworkOutletComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HomeworkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
