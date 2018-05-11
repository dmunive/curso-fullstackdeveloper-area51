import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoDepasComponent } from './nuevo-depas.component';

describe('NuevoDepasComponent', () => {
  let component: NuevoDepasComponent;
  let fixture: ComponentFixture<NuevoDepasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoDepasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoDepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
