import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDuplictesComponent } from './get-duplictes.component';

describe('GetDuplictesComponent', () => {
  let component: GetDuplictesComponent;
  let fixture: ComponentFixture<GetDuplictesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDuplictesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDuplictesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
