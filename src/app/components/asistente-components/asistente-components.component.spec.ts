import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenteComponentsComponent } from './asistente-components.component';

describe('AsistenteComponentsComponent', () => {
  let component: AsistenteComponentsComponent;
  let fixture: ComponentFixture<AsistenteComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsistenteComponentsComponent]
    });
    fixture = TestBed.createComponent(AsistenteComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
