import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinAllComponent } from './linkedin-all.component';

describe('LinkedinAllComponent', () => {
  let component: LinkedinAllComponent;
  let fixture: ComponentFixture<LinkedinAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedinAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedinAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
