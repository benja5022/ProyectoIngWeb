import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextdesComponent } from './textdes.component';

describe('TextdesComponent', () => {
  let component: TextdesComponent;
  let fixture: ComponentFixture<TextdesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextdesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextdesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
