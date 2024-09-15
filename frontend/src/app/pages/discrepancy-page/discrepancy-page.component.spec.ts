import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscrepancyPageComponent } from './discrepancy-page.component';

describe('DiscrepancyPageComponent', () => {
  let component: DiscrepancyPageComponent;
  let fixture: ComponentFixture<DiscrepancyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscrepancyPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscrepancyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
