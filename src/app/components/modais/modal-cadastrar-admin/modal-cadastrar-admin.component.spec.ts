import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCadastrarAdminComponent } from './modal-cadastrar-admin.component';

describe('ModalCadastrarAdminComponent', () => {
  let component: ModalCadastrarAdminComponent;
  let fixture: ComponentFixture<ModalCadastrarAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalCadastrarAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalCadastrarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
