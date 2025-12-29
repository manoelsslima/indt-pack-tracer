import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Setor } from './setor';

describe('Setor', () => {
  let component: Setor;
  let fixture: ComponentFixture<Setor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Setor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Setor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
