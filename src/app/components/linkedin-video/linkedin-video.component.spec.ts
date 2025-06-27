import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinVideoComponent } from './linkedin-video.component';

describe('LinkedinVideoComponent', () => {
  let component: LinkedinVideoComponent;
  let fixture: ComponentFixture<LinkedinVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedinVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedinVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
