import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroopIconComponent } from './troop-icon.component';

describe('TroopIconComponent', () => {
  let component: TroopIconComponent;
  let fixture: ComponentFixture<TroopIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TroopIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TroopIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
