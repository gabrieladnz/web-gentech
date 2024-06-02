import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarArtigoComponent } from './modal-editar-artigo.component';

describe('ModalEditarArtigoComponent', () => {
  let component: ModalEditarArtigoComponent;
  let fixture: ComponentFixture<ModalEditarArtigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalEditarArtigoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalEditarArtigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
