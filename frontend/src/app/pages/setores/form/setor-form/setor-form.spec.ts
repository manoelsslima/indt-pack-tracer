import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetorForm } from './setor-form';

describe('SetorForm', () => {
  let component: SetorForm;
  let fixture: ComponentFixture<SetorForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetorForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetorForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
