import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCursosComponent } from './formulario-cursos.component';

describe('FormularioCursosComponent', () => {
  let component: FormularioCursosComponent;
  let fixture: ComponentFixture<FormularioCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
