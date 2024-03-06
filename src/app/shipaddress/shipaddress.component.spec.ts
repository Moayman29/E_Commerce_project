import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipaddressComponent } from './shipaddress.component';

describe('ShipaddressComponent', () => {
  let component: ShipaddressComponent;
  let fixture: ComponentFixture<ShipaddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipaddressComponent]
    });
    fixture = TestBed.createComponent(ShipaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
