import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaScreenComponent } from './galeria-screen.component';

describe('GaleriaScreenComponent', () => {
  let component: GaleriaScreenComponent;
  let fixture: ComponentFixture<GaleriaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
