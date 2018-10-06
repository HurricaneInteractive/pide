import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuPlaylistDataComponent } from './cu-playlist-data.component';

describe('CuPlaylistDataComponent', () => {
  let component: CuPlaylistDataComponent;
  let fixture: ComponentFixture<CuPlaylistDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuPlaylistDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuPlaylistDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
