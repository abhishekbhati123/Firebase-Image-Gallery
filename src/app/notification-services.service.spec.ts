import { TestBed } from '@angular/core/testing';

import { NotificationServicesService } from './notification-services.service';

describe('NotificationServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotificationServicesService = TestBed.get(NotificationServicesService);
    expect(service).toBeTruthy();
  });
});
