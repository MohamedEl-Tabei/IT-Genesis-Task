import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vision4k } from './vision4k';

describe('Vision4k', () => {
  let component: Vision4k;
  let fixture: ComponentFixture<Vision4k>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vision4k]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vision4k);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
