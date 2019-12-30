import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ParticipationService } from '../../../services/participation.service';
import { Participation } from '../../../models/participation';
import { AddNewParticipationDialog } from '../add-new-participation-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-participations-grid',
  templateUrl: './participations-grid.component.html',
  styleUrls: ['./participations-grid.component.css']
})
export class ParticipationsGridComponent implements OnInit {
  contactid: number;
  participations = new MatTableDataSource<any>([]);

  constructor(private route: ActivatedRoute, private participationService: ParticipationService, private dialog: MatDialog) {     
  }

  ngOnInit() {   
    this.route.params.subscribe(params => {
      this.contactid = params['id']
    });
    
    this.participationService.getParticipationsForContact(this.contactid).subscribe(
      (data:any) => { 
        console.log('participations:', data);
        this.participations.data = data; 
      }
    ) 
  }

  addNewParticipation() : void {
    var participation = new Participation;

    const dialogRef = this.dialog.open(AddNewParticipationDialog, {
      width: '400px',
      data: participation
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

}
