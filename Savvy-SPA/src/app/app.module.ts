import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { MainComponent } from './main/main.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AdminComponent } from './admin/admin.component';
import { appRoutes } from './routes';
import { DbsetupComponent } from './dbsetup/dbsetup.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MainComponent,
      FavoritesComponent,
      AdminComponent,
      DbsetupComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
