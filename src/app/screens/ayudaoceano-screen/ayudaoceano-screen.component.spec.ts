import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaoceanoScreenComponent } from './ayudaoceano-screen.component';

describe('AyudaoceanoScreenComponent', () => {
  let component: AyudaoceanoScreenComponent;
  let fixture: ComponentFixture<AyudaoceanoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyudaoceanoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyudaoceanoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
