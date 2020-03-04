import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatFormFieldModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatTabsModule} from '@angular/material';
import { MatDialogModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { ContactsGridComponent } from './components/contacts-grid/contacts-grid.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { AddNewParticipationDialog } from './components/program-participation/add-new-participation-dialog.component';
import { ParticipationsGridComponent } from './components/program-participation/participations-grid/participations-grid.component';

import { ContactService } from './services/contact.service';
import { ParticipationService } from './services/participation.service';
import { ProgramService } from './services/program.service';
import { CountryService } from './services/country.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact/:id', component: ContactDetailsComponent },
  { path: 'contact', component: ContactDetailsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsGridComponent,
    ContactDetailsComponent,
    AddNewParticipationDialog,
    ParticipationsGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatDialogModule
  ],
  providers: [
    ContactService,
    ParticipationService,
    ProgramService,
    CountryService
  ],
  entryComponents: [AddNewParticipationDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
