import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlazeErrorComponent } from './blaze-error.component';

describe('BlazeErrorComponent', () => {
  let component: BlazeErrorComponent;
  let fixture: ComponentFixture<BlazeErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlazeErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlazeErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
