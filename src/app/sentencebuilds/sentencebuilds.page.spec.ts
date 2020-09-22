import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SentencebuildsPage } from './sentencebuilds.page';

describe('SentencebuildsPage', () => {
  let component: SentencebuildsPage;
  let fixture: ComponentFixture<SentencebuildsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentencebuildsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SentencebuildsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
