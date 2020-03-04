import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProgramService } from '../../services/program.service';
import { CountryService } from '../../services/country.service';
import { ParticipationService } from '../../services/participation.service';


@Component({
  selector: 'app-add-new-participation-dialog',
  templateUrl: './add-new-participation-dialog.component.html',
  styleUrls: ['./add-new-participation-dialog.component.css']
})
export class AddNewParticipationDialog implements OnInit {
  programs : any[] = [];
  countries : any[] = [];
  constructor(private formBuilder: FormBuilder,
    private programService: ProgramService,
    private countryService: CountryService,
    private participationService : ParticipationService, 
    private dialogRef: MatDialogRef<AddNewParticipationDialog>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { 
    
  }

  
  cancelClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {

    this.programService.getPrograms().subscribe(
      (data:any) => { 
        this.programs = data; 
      }
    );
    
    this.countryService.getCountries().subscribe(
      (data:any) => { 
        this.countries = data; 
      }
    );
    
  }

  participationForm = this.formBuilder.group({
    year: ['', Validators.required],
    program: ['', Validators.required],
    hostCity: ['', Validators.required],
    hostCountry: ['', Validators.required]
  });

  get year() {
    return this.participationForm.get('year');
  }
  get hostCountry() {
    return this.participationForm.get('hostCountry');
  }
  get hostCity() {
    return this.participationForm.get('hostCity');
  }
  get program() {
    return this.participationForm.get('program');
  }

  saveClicked() : void {
    //pass the modified form data back to parent component
    this.dialogRef.close(this.participationForm.value);
  }

}
