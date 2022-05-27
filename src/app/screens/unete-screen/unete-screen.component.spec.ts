import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UneteScreenComponent } from './unete-screen.component';

describe('UneteScreenComponent', () => {
  let component: UneteScreenComponent;
  let fixture: ComponentFixture<UneteScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UneteScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UneteScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
