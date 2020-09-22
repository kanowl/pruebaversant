import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SentencecompletionPage } from './sentencecompletion.page';

describe('SentencecompletionPage', () => {
  let component: SentencecompletionPage;
  let fixture: ComponentFixture<SentencecompletionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentencecompletionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SentencecompletionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
