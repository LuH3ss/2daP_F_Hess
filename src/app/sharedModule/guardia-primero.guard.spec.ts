import { TestBed } from '@angular/core/testing';

import { GuardiaPrimeroGuard } from './guardia-primero.guard';

describe('GuardiaPrimeroGuard', () => {
  let guard: GuardiaPrimeroGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardiaPrimeroGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
