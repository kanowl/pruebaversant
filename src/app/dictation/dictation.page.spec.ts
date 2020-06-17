import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DictationPage } from './dictation.page';

describe('DictationPage', () => {
  let component: DictationPage;
  let fixture: ComponentFixture<DictationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DictationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
