import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClansTabsComponent } from './clans-tabs.component';

describe('ClansTabsComponent', () => {
  let component: ClansTabsComponent;
  let fixture: ComponentFixture<ClansTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClansTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClansTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
