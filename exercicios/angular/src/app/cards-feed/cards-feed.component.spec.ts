import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsFeedComponent } from './cards-feed.component';

describe('CardsFeedComponent', () => {
  let component: CardsFeedComponent;
  let fixture: ComponentFixture<CardsFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
