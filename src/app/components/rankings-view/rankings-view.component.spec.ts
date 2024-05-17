import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingsViewComponent } from './rankings-view.component';

describe('RankingsViewComponent', () => {
  let component: RankingsViewComponent;
  let fixture: ComponentFixture<RankingsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankingsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RankingsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
