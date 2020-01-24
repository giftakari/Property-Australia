import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerpertyListingComponent } from './property-listing.component';

describe('PerpertyListingComponent', () => {
  let component: PerpertyListingComponent;
  let fixture: ComponentFixture<PerpertyListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerpertyListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerpertyListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
