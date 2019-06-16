import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebWorkerComponent } from './web-worker.component';

describe('WebWorkerComponent', () => {
  let component: WebWorkerComponent;
  let fixture: ComponentFixture<WebWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
