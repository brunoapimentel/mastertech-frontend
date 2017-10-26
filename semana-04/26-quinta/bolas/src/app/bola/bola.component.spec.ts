import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BolaComponent } from './bola.component';

describe('BolaComponent', () => {
  let component: BolaComponent;
  let fixture: ComponentFixture<BolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
