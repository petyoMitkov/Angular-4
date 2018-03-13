import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundNgclassComponent } from './playground-ngclass.component';

describe('PlaygroundNgclassComponent', () => {
  let component: PlaygroundNgclassComponent;
  let fixture: ComponentFixture<PlaygroundNgclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundNgclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundNgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
