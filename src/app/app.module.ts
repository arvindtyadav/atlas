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
import { PlanRouteComponent } from './plan-route/plan-route.component';

import { FormsModule } from '@angular/forms';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './map/map.component';

import {TreeModule} from 'primeng/tree';
import {ButtonModule} from 'primeng/button';
import { NodeService } from './nodeservice';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DashboardComponent,
    DirectoryComponent,
    PlanRouteComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    LeafletModule,
    FormsModule,
    TreeModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [{ provide: AUTH_SETTINGS, useValue: { appVerificationDisabledForTesting: true } }, NodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
