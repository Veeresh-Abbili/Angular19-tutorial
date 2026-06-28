import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsulate2Component } from './view-encapsulate2.component';

describe('ViewEncapsulate2Component', () => {
  let component: ViewEncapsulate2Component;
  let fixture: ComponentFixture<ViewEncapsulate2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEncapsulate2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEncapsulate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
