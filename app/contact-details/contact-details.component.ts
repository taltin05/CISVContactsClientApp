import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { formatDate } from "@angular/common";
import { ContactService } from '../services/contact.service';
import { ParticipationService } from '../services/participation.service';
import { IContact, Contact } from '../models/contact';
import { GENDERS } from '../constants/genders';
import { STATES } from '../constants/states';
import { MatTableDataSource } from '@angular/material';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  public id: any;
  public contact : IContact;
  participations = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['year', 'program', 'hostcity', 'hostcounCode'];

  genders = GENDERS;
  states = STATES;
  
  firstnameFormControl = new FormControl('', [Validators.required]);
  lastnameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.email]);
  addressFormControl = new FormControl('', [Validators.required]);
  cityFormControl = new FormControl('', [Validators.required]);
  stateFormControl = new FormControl('', [Validators.required]);
  zipFormControl = new FormControl('', [Validators.required]);

  profileForm = new FormGroup({
    firstName: this.firstnameFormControl,
    lastName: this.lastnameFormControl,
    address: this.addressFormControl,
    city: this.cityFormControl,
    zip: this.zipFormControl,
    gender: new FormControl(),
    state: this.stateFormControl,
    homePhone: new FormControl(),
    mobilePhone: new FormControl(),
    email: this.emailFormControl,
    dob: new FormControl(),
    fundraising: new FormControl()
  });


  matcher = new MyErrorStateMatcher();

  constructor(private route: ActivatedRoute, private contactService: ContactService, private participationService: ParticipationService) {
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']
    });

    if (this.id != null)
    {
      this.participationService.getParticipationsForContact(this.id).subscribe(
        (data:any) => { 
          console.log('participations:', data);
          this.participations.data = data; 
        }
      ) 

      this.contactService.getContact(this.id).subscribe(
        (data:any) => {
          console.log('contact:', data);
          this.contact = data;
          this.profileForm.patchValue({
            firstName: this.contact.firstName,
            lastName: this.contact.lastName,
            address: this.contact.addr1,
            city: this.contact.city,
            zip: this.contact.zip,
            gender: this.contact.gender,
            state: this.contact.state,
            homePhone: this.contact.homePhone,
            mobilePhone: this.contact.mobilePhone,
            email : this.contact.email,
            dob: this.contact.dob,
            fundraising: this.contact.fundraising          
          });
        }
      );  
    }    
  }

  saveButtonClicked() {
    
    if (this.contact == null) {
        this.addContact();
    }
    else {
        this.saveContact();
    }    
  }

  addContact() {

     var contact = new Contact;
         
     contact.firstName = this.profileForm.value.firstName;
     contact.lastName = this.profileForm.value.lastName;
     contact.gender = this.profileForm.value.gender;
     contact.dob = this.profileForm.value.dob;
     contact.addr1 = this.profileForm.value.address;
     contact.city = this.profileForm.value.city;
     contact.state = this.profileForm.value.state;
     contact.zip = this.profileForm.value.zip;
     contact.homePhone = this.profileForm.value.homePhone;
     contact.mobilePhone = this.profileForm.value.mobilePhone;
     contact.email = this.profileForm.value.email;
     contact.fundraising = this.profileForm.value.fundraising;
     contact.createdatetime = formatDate(Date.now(), 'MM/dd/yyyy hh:mm:ss', 'en-US');
     
     console.log('contact:', contact);

    this.contactService.addContact(contact).subscribe();
  }

  saveContact() {
     var contact = this.contact;

     contact.firstName = this.profileForm.value.firstName;
     contact.lastName = this.profileForm.value.lastName;
     contact.gender = this.profileForm.value.gender;
     contact.dob = this.profileForm.value.dob;
     contact.addr1 = this.profileForm.value.address;
     contact.city = this.profileForm.value.city;
     contact.state = this.profileForm.value.state;
     contact.zip = this.profileForm.value.zip;
     contact.homePhone = this.profileForm.value.homePhone;
     contact.mobilePhone = this.profileForm.value.mobilePhone;
     contact.email = this.profileForm.value.email;
     contact.fundraising = this.profileForm.value.fundraising;
     contact.modifydatetime = formatDate(Date.now(), 'MM/dd/yyyy hh:mm:ss', 'en-US');

     this.contactService.updateContact(contact).subscribe();
  }

  addNewParticipation() {
    
  }
}
