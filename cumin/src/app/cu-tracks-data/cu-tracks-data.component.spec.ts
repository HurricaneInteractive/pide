import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuTracksDataComponent } from './cu-tracks-data.component';

describe('CuTracksDataComponent', () => {
  let component: CuTracksDataComponent;
  let fixture: ComponentFixture<CuTracksDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuTracksDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuTracksDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
