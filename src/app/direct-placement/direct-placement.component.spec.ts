import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectPlacementComponent } from './direct-placement.component';

describe('DirectPlacementComponent', () => {
  let component: DirectPlacementComponent;
  let fixture: ComponentFixture<DirectPlacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectPlacementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
