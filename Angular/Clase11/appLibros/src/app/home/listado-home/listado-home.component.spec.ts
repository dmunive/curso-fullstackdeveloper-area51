import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoHomeComponent } from './listado-home.component';

describe('ListadoHomeComponent', () => {
  let component: ListadoHomeComponent;
  let fixture: ComponentFixture<ListadoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
