import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicSectionService extends RestService {
  endpoint = `${environment.api}/section`;
}
