import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from "angularfire2";
import { DropdownModule, CarouselModule } from 'ng2-bootstrap';

import { AppRouter } from './app.router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


export const fireConfig = {
  apiKey:"AIzaSyA97NvLRoA0LFfYALoZRjBX98qv0qP-Z-c",
  authDomain:"angulardemo-dd3dd.firebaseapp.com",
  databaseURL:"https://angulardemo-dd3dd.firebaseio.com",
  storageBucket:'angulardemo-dd3dd.appspot.com',
  messagingSenderId:"301458754212"
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    AppRouter,
    BrowserModule,
    FormsModule,
    HttpModule,
    DropdownModule.forRoot(),
    CarouselModule.forRoot(),
    AngularFireModule.initializeApp(fireConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
