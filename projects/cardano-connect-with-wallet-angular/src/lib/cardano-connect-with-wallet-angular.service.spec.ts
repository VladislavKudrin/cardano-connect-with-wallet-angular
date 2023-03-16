import { TestBed } from '@angular/core/testing';

import { CardanoConnectWithWalletAngularService } from './cardano-connect-with-wallet-angular.service';

describe('CardanoConnectWithWalletAngularService', () => {
  let service: CardanoConnectWithWalletAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardanoConnectWithWalletAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
