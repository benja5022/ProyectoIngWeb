import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrollosuscScreenComponent } from './desarrollosusc-screen.component';

describe('DesarrollosuscScreenComponent', () => {
  let component: DesarrollosuscScreenComponent;
  let fixture: ComponentFixture<DesarrollosuscScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesarrollosuscScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarrollosuscScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
