import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ParticipationService } from '../../../services/participation.service';
import { Participation } from '../../../models/participation';
import { AddNewParticipationDialog } from '../add-new-participation-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { formatDate } from "@angular/common";

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
    
    this.loadParticipations();
  }

  addNewParticipation() : void {
   

    const dialogRef = this.dialog.open(AddNewParticipationDialog, {
      width: '400px',
      disableClose: true,
      autoFocus: true,
      data: {
        contactid : this.contactid
      }
    });

    dialogRef.afterClosed().subscribe(data => {
        this.saveNewParticipation(data);
    });

  }

  saveNewParticipation(data:any) : void {
    var participation = new Participation;
    
    participation.contId = this.contactid;
    participation.year =  data.year;
    participation.progId = data.program;
    participation.hostcity = data.hostCity;
    participation.hostcounCode = data.hostCountry;
    participation.createdatetime = formatDate(Date.now(), 'MM/dd/yyyy hh:mm:ss', 'en-US');
    this.participationService.addNewParticipation(participation).subscribe(
      () => {
        this.loadParticipations();
      }
    );

  }

  loadParticipations() : void {
    this.participationService.getParticipationsForContact(this.contactid).subscribe(
      (data:any) => { 
        console.log('participations:', data);
        this.participations.data = data; 
      }
    )
  }

}
