import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nDigitalComponent } from './i18n-digital.component';

describe('I18nDigitalComponent', () => {
  let component: I18nDigitalComponent;
  let fixture: ComponentFixture<I18nDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I18nDigitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(I18nDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
