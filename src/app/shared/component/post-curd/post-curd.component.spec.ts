import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCurdComponent } from './post-curd.component';

describe('PostCurdComponent', () => {
  let component: PostCurdComponent;
  let fixture: ComponentFixture<PostCurdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCurdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
