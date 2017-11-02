import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsNavbarComponent } from './cards-navbar.component';

describe('CardsNavbarComponent', () => {
  let component: CardsNavbarComponent;
  let fixture: ComponentFixture<CardsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
