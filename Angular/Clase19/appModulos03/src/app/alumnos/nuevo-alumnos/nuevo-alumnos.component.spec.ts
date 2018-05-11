import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoAlumnosComponent } from './nuevo-alumnos.component';

describe('NuevoAlumnosComponent', () => {
  let component: NuevoAlumnosComponent;
  let fixture: ComponentFixture<NuevoAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
