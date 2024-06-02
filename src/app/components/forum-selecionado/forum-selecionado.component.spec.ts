import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumSelecionadoComponent } from './forum-selecionado.component';

describe('ForumSelecionadoComponent', () => {
  let component: ForumSelecionadoComponent;
  let fixture: ComponentFixture<ForumSelecionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForumSelecionadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForumSelecionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
