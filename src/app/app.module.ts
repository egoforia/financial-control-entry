import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { EntryFormComponent } from './entry-form/entry-form.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    EntryFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
