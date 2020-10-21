import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInPastComponent } from './component-in-past.component';

describe('ComponentInPastComponent', () => {
  let component: ComponentInPastComponent;
  let fixture: ComponentFixture<ComponentInPastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentInPastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInPastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
