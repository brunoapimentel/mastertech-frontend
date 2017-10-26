import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadradoComponent } from './quadrado.component';

describe('QuadradoComponent', () => {
  let component: QuadradoComponent;
  let fixture: ComponentFixture<QuadradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuadradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
