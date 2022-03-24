import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlazeSkillsComponent } from './blaze-skills.component';

describe('BlazeSkillsComponent', () => {
  let component: BlazeSkillsComponent;
  let fixture: ComponentFixture<BlazeSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlazeSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlazeSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
