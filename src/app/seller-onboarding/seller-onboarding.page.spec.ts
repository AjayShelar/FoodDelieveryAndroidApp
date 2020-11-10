import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SellerOnboardingPage } from './seller-onboarding.page';

describe('SellerOnboardingPage', () => {
  let component: SellerOnboardingPage;
  let fixture: ComponentFixture<SellerOnboardingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerOnboardingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SellerOnboardingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
