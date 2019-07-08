import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuertosPage } from './huertos.page';

describe('HuertosPage', () => {
  let component: HuertosPage;
  let fixture: ComponentFixture<HuertosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuertosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuertosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
