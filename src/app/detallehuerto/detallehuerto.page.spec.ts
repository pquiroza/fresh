import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallehuertoPage } from './detallehuerto.page';

describe('DetallehuertoPage', () => {
  let component: DetallehuertoPage;
  let fixture: ComponentFixture<DetallehuertoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallehuertoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallehuertoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
