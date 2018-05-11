import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionCursosComponent } from './edicion-cursos.component';

describe('EdicionCursosComponent', () => {
  let component: EdicionCursosComponent;
  let fixture: ComponentFixture<EdicionCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
