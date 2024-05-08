import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AksesuariComponent } from './aksesuari.component';

describe('AksesuariComponent', () => {
  let component: AksesuariComponent;
  let fixture: ComponentFixture<AksesuariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AksesuariComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AksesuariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
