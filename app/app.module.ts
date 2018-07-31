import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactService } from './contact.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactsGridComponent } from './contacts-grid/contacts-grid.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent } 
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsGridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
    
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
