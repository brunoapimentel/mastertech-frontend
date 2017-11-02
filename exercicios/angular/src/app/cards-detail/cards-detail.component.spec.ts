import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDetailComponent } from './cards-detail.component';

describe('CardsDetailComponent', () => {
  let component: CardsDetailComponent;
  let fixture: ComponentFixture<CardsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
