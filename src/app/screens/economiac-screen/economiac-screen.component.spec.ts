import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomiacScreenComponent } from './economiac-screen.component';

describe('EconomiacScreenComponent', () => {
  let component: EconomiacScreenComponent;
  let fixture: ComponentFixture<EconomiacScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconomiacScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomiacScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
