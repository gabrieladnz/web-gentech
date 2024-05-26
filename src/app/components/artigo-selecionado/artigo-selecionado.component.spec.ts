import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigoSelecionadoComponent } from './artigo-selecionado.component';

describe('ArtigoSelecionadoComponent', () => {
  let component: ArtigoSelecionadoComponent;
  let fixture: ComponentFixture<ArtigoSelecionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtigoSelecionadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtigoSelecionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
