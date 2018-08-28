import { Component,  OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contacts-grid',
  templateUrl: './contacts-grid.component.html',
  styleUrls: ['./contacts-grid.component.css']
})
export class ContactsGridComponent implements OnInit {
  
  contactsData = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['lastName', 'firstName', 'gender', 'addr1', 'city', 'state', 'zip', 'homePhone', 'mobilePhone', 'email'];
  
  constructor(private contactService: ContactService) {  
    contactService.get().subscribe(
      (data:any) => {this.contactsData.data = data}
    );
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngOnInit() {    
    this.contactsData.paginator = this.paginator;
  }

}
