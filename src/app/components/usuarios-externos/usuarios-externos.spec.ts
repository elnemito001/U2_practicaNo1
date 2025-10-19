import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosExternos } from './usuarios-externos';

describe('UsuariosExternos', () => {
  let component: UsuariosExternos;
  let fixture: ComponentFixture<UsuariosExternos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuariosExternos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosExternos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
