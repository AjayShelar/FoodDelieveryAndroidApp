import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppModesPage } from './app-modes.page';

describe('AppModesPage', () => {
  let component: AppModesPage;
  let fixture: ComponentFixture<AppModesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppModesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppModesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
