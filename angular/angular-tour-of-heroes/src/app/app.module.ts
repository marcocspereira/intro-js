import { MaterialAngularModule } from './shared/material-angular.module';
import { ApiService } from './api.service';
import { HeroSearchComponent } from './heroes/hero-search/hero-search.component';
import { InMemoryDataService } from './in-memory-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
    //  MaterialAngularModule
    // todo comment before to connect to api
    /*     HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }) */
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
