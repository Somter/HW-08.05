import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoryComponent } from './monitory.component';

describe('MonitoryComponent', () => {
  let component: MonitoryComponent;
  let fixture: ComponentFixture<MonitoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
