import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateChatWindowComponent } from './private-chat-window.component';

describe('PrivateChatWindowComponent', () => {
  let component: PrivateChatWindowComponent;
  let fixture: ComponentFixture<PrivateChatWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateChatWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateChatWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
