import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocTableComponent } from './coc-table.component';

describe('CocTableComponent', () => {
  let component: CocTableComponent;
  let fixture: ComponentFixture<CocTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CocTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
