import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroCarritoComponent } from './libro-carrito.component';

describe('LibroCarritoComponent', () => {
  let component: LibroCarritoComponent;
  let fixture: ComponentFixture<LibroCarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroCarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
