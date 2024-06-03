import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPublicarArtigoComponent } from './modal-publicar-artigo.component';

describe('ModalPublicarArtigoComponent', () => {
  let component: ModalPublicarArtigoComponent;
  let fixture: ComponentFixture<ModalPublicarArtigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalPublicarArtigoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalPublicarArtigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
