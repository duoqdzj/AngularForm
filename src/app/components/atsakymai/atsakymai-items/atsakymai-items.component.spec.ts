import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtsakymaiItemsComponent } from './atsakymai-items.component';

describe('AtsakymaiItemsComponent', () => {
  let component: AtsakymaiItemsComponent;
  let fixture: ComponentFixture<AtsakymaiItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtsakymaiItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtsakymaiItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
