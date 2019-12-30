import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewParticipationDialog } from './add-new-participation-dialog.component';

describe('ContactDialogComponent', () => {
  let component: AddNewParticipationDialog;
  let fixture: ComponentFixture<AddNewParticipationDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewParticipationDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewParticipationDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
