import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtsakymaiComponent } from './atsakymai.component';

describe('AtsakymaiComponent', () => {
  let component: AtsakymaiComponent;
  let fixture: ComponentFixture<AtsakymaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtsakymaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtsakymaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
