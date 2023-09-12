import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDetComponent } from './basic-det.component';

describe('BasicDetComponent', () => {
  let component: BasicDetComponent;
  let fixture: ComponentFixture<BasicDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
