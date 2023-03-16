import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardanoConnectWithWalletAngularComponent } from './cardano-connect-with-wallet-angular.component';

describe('CardanoConnectWithWalletAngularComponent', () => {
  let component: CardanoConnectWithWalletAngularComponent;
  let fixture: ComponentFixture<CardanoConnectWithWalletAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardanoConnectWithWalletAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardanoConnectWithWalletAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
