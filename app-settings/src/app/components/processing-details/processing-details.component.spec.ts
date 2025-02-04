import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingDetailsComponent } from './processing-details.component';

describe('ProcessingDetailsComponent', () => {
  let component: ProcessingDetailsComponent;
  let fixture: ComponentFixture<ProcessingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessingDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
