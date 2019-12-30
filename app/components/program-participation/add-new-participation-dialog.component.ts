import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProgramService } from '../../services/program.service'

@Component({
  selector: 'app-add-new-participation-dialog',
  templateUrl: './add-new-participation-dialog.component.html',
  styleUrls: ['./add-new-participation-dialog.component.css']
})
export class AddNewParticipationDialog implements OnInit {

  programs : any[] = [];
  constructor(private programService: ProgramService, private dialogRef: MatDialogRef<AddNewParticipationDialog>, 
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
    ) 
  }

}
