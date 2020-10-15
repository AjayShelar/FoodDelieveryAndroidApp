import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NearbySellersPage } from './nearby-sellers.page';

describe('NearbySellersPage', () => {
  let component: NearbySellersPage;
  let fixture: ComponentFixture<NearbySellersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbySellersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NearbySellersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
