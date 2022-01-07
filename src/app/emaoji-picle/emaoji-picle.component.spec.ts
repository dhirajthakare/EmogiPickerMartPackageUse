import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmaojiPicleComponent } from './emaoji-picle.component';

describe('EmaojiPicleComponent', () => {
  let component: EmaojiPicleComponent;
  let fixture: ComponentFixture<EmaojiPicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmaojiPicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmaojiPicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
