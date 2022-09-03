import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {RestService} from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class ElearningPlansService extends RestService {
  endpoint = `${environment.api}/elearning-plans`;
}
