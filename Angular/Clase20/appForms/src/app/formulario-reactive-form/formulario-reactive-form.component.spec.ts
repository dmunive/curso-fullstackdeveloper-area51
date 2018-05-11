import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReactiveFormComponent } from './formulario-reactive-form.component';

describe('FormularioReactiveFormComponent', () => {
  let component: FormularioReactiveFormComponent;
  let fixture: ComponentFixture<FormularioReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
