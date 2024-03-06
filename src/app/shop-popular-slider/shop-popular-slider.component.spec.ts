import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPopularSliderComponent } from './shop-popular-slider.component';

describe('ShopPopularSliderComponent', () => {
  let component: ShopPopularSliderComponent;
  let fixture: ComponentFixture<ShopPopularSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopPopularSliderComponent]
    });
    fixture = TestBed.createComponent(ShopPopularSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
