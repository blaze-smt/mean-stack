import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlazeProjectsComponent } from './blaze-projects.component';

describe('BlazeProjectsComponent', () => {
  let component: BlazeProjectsComponent;
  let fixture: ComponentFixture<BlazeProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlazeProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlazeProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
