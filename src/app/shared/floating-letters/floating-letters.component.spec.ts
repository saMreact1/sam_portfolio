import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingLettersComponent } from './floating-letters.component';

describe('FloatingLettersComponent', () => {
  let component: FloatingLettersComponent;
  let fixture: ComponentFixture<FloatingLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FloatingLettersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FloatingLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
