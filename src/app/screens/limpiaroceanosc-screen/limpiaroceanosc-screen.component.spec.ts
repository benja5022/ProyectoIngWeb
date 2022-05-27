import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpiaroceanoscScreenComponent } from './limpiaroceanosc-screen.component';

describe('LimpiaroceanoscScreenComponent', () => {
  let component: LimpiaroceanoscScreenComponent;
  let fixture: ComponentFixture<LimpiaroceanoscScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimpiaroceanoscScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimpiaroceanoscScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
