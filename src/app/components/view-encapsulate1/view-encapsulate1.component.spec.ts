import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsulate1Component } from './view-encapsulate1.component';

describe('ViewEncapsulate1Component', () => {
  let component: ViewEncapsulate1Component;
  let fixture: ComponentFixture<ViewEncapsulate1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEncapsulate1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEncapsulate1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
