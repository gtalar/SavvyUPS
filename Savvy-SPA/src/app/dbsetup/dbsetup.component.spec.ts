/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DbsetupComponent } from './dbsetup.component';

describe('DbsetupComponent', () => {
  let component: DbsetupComponent;
  let fixture: ComponentFixture<DbsetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbsetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
