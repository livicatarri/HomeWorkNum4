import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageThirdComponent } from './page-third.component';

describe('PageThirdComponent', () => {
  let component: PageThirdComponent;
  let fixture: ComponentFixture<PageThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageThirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
