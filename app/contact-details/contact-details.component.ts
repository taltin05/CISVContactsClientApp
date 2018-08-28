import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact';
import { GENDERS } from '../constants/genders';
import { STATES } from '../constants/states';

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
  public contact : Contact;
  
  genders = GENDERS;
  states = STATES;
  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  profileForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    address: new FormControl(),
    city: new FormControl(),
    zip: new FormControl(),
    gender: new FormControl(),
    state: new FormControl(),
    homePhone: new FormControl(),
    mobilePhone: new FormControl(),
    email: new FormControl(),
    dob: new FormControl()
  });

  matcher = new MyErrorStateMatcher();

  constructor(private route: ActivatedRoute, private contactService: ContactService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']
    });

    this.contactService.getSingle(this.id).subscribe(
      (data:any) => {
        this.contact = data;
        console.log(this.contact);
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
          dob: this.contact.dob          
        });
      }
    );
    
  }

}
