import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuAlbumsDataComponent } from './cu-albums-data.component';

describe('CuAlbumsDataComponent', () => {
  let component: CuAlbumsDataComponent;
  let fixture: ComponentFixture<CuAlbumsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuAlbumsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuAlbumsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
