import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobrenosotrosScreenComponent } from './sobrenosotros-screen.component';

describe('SobrenosotrosScreenComponent', () => {
  let component: SobrenosotrosScreenComponent;
  let fixture: ComponentFixture<SobrenosotrosScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobrenosotrosScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobrenosotrosScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
