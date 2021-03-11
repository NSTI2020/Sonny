import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechinfoComponent } from './techinfo.component';

describe('TechinfoComponent', () => {
  let component: TechinfoComponent;
  let fixture: ComponentFixture<TechinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
