import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItOnsiteOffshoreComponent } from './it-onsite-offshore.component';

describe('ItOnsiteOffshoreComponent', () => {
  let component: ItOnsiteOffshoreComponent;
  let fixture: ComponentFixture<ItOnsiteOffshoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItOnsiteOffshoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItOnsiteOffshoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
