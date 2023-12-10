import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AalubiaComponent } from './aalubia.component';

describe('AalubiaComponent', () => {
  let component: AalubiaComponent;
  let fixture: ComponentFixture<AalubiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AalubiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AalubiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
