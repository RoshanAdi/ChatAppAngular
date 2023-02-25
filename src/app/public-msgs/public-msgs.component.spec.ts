import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicMsgsComponent } from './public-msgs.component';

describe('PublicMsgsComponent', () => {
  let component: PublicMsgsComponent;
  let fixture: ComponentFixture<PublicMsgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicMsgsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicMsgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
