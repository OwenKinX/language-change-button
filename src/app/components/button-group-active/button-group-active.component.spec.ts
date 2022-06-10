import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGroupActiveComponent } from './button-group-active.component';

describe('ButtonGroupActiveComponent', () => {
  let component: ButtonGroupActiveComponent;
  let fixture: ComponentFixture<ButtonGroupActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonGroupActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGroupActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
