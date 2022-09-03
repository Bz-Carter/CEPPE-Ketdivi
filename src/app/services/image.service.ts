import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  upload(data: any) {
    return this.http.post(`${environment.api}/upload`, data);
  }

  childImageUpload(data: any) {
    return this.http.post(`${environment.api}/upload/child_image`, data);
  }

  childPaperUpload(data: any) {
    return this.http.post(`${environment.api}/upload/child_paper`, data);
  }

  vaccinationRecordUpload(data: any) {
    return this.http.post(`${environment.api}/upload/vaccination_record`, data);
  }

  tutorsCNIUpload(data: any) {
    return this.http.post(`${environment.api}/upload/tutors_cni`, data);
  }
}
