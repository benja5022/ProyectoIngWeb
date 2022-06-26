import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasScreenComponent } from './noticias-screen.component';

describe('NoticiasScreenComponent', () => {
  let component: NoticiasScreenComponent;
  let fixture: ComponentFixture<NoticiasScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
