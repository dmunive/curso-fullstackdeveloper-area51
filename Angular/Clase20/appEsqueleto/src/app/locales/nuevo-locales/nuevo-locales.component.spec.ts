import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoLocalesComponent } from './nuevo-locales.component';

describe('NuevoLocalesComponent', () => {
  let component: NuevoLocalesComponent;
  let fixture: ComponentFixture<NuevoLocalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoLocalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoLocalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
