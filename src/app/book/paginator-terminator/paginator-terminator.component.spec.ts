import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorTerminatorComponent } from './paginator-terminator.component';

describe('PaginatorTerminatorComponent', () => {
  let component: PaginatorTerminatorComponent;
  let fixture: ComponentFixture<PaginatorTerminatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorTerminatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorTerminatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
