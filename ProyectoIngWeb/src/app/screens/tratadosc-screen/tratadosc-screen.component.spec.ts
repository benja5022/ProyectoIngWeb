import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratadoscScreenComponent } from './tratadosc-screen.component';

describe('TratadoscScreenComponent', () => {
  let component: TratadoscScreenComponent;
  let fixture: ComponentFixture<TratadoscScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TratadoscScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TratadoscScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
