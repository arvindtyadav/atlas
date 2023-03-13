import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';

import { AngularFireModule } from '@angular/fire/compat';
import { SETTINGS as AUTH_SETTINGS } from '@angular/fire/compat/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DirectoryComponent } from './directory/directory.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DashboardComponent,
    DirectoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ],
  providers: [{ provide: AUTH_SETTINGS, useValue: { appVerificationDisabledForTesting: true } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
