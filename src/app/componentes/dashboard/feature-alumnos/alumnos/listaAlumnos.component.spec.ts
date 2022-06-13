import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlumnosComponent } from './listaAlumnos.component';

describe('ReportesComponent', () => {
  let component: ListaAlumnosComponent;
  let fixture: ComponentFixture<ListaAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAlumnosComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
