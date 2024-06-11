import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPublicarForumComponent } from './modal-publicar-forum.component';

describe('ModalPublicarForumComponent', () => {
  let component: ModalPublicarForumComponent;
  let fixture: ComponentFixture<ModalPublicarForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalPublicarForumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalPublicarForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
