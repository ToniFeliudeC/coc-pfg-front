import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClansViewComponent } from './clans-view.component';

describe('ClansViewComponent', () => {
  let component: ClansViewComponent;
  let fixture: ComponentFixture<ClansViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClansViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClansViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
