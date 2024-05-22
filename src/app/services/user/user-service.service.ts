import { Injectable } from '@angular/core';
import { RequestService } from '../request/request.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService extends RequestService {

  public constructor(protected override httpClient: HttpClient) {
    super(httpClient);
  }
}
