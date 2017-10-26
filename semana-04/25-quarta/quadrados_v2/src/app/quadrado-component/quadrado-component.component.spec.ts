import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadradoComponentComponent } from './quadrado-component.component';

describe('QuadradoComponentComponent', () => {
  let component: QuadradoComponentComponent;
  let fixture: ComponentFixture<QuadradoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuadradoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadradoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
