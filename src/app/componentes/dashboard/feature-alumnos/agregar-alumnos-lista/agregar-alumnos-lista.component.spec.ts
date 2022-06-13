import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAlumnosListaComponent } from './agregar-alumnos-lista.component';

describe('AgregarAlumnosListaComponent', () => {
  let component: AgregarAlumnosListaComponent;
  let fixture: ComponentFixture<AgregarAlumnosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAlumnosListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAlumnosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
