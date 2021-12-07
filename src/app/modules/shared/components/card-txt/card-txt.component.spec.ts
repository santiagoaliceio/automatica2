import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTxtComponent } from './card-txt.component';

describe('CardTxtComponent', () => {
  let component: CardTxtComponent;
  let fixture: ComponentFixture<CardTxtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTxtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
