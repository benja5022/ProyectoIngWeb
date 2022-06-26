import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrascampanasScreenComponent } from './nuestrascampanas-screen.component';

describe('NuestrascampanasScreenComponent', () => {
  let component: NuestrascampanasScreenComponent;
  let fixture: ComponentFixture<NuestrascampanasScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestrascampanasScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestrascampanasScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
