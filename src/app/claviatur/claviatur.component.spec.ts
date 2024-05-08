import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaviaturComponent } from './claviatur.component';

describe('ClaviaturComponent', () => {
  let component: ClaviaturComponent;
  let fixture: ComponentFixture<ClaviaturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaviaturComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClaviaturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
