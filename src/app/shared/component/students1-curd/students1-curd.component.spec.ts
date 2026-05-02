import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Students1CurdComponent } from './students1-curd.component';

describe('Students1CurdComponent', () => {
  let component: Students1CurdComponent;
  let fixture: ComponentFixture<Students1CurdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Students1CurdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Students1CurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
