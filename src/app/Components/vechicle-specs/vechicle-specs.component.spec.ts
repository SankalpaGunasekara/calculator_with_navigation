import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VechicleSpecsComponent } from './vechicle-specs.component';

describe('VechicleSpecsComponent', () => {
  let component: VechicleSpecsComponent;
  let fixture: ComponentFixture<VechicleSpecsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VechicleSpecsComponent]
    });
    fixture = TestBed.createComponent(VechicleSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
