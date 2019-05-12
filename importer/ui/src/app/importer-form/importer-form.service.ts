import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormGrouper, Fielder } from './importer-formgroup';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

export interface Response {
  success: boolean,
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImporterFormService {

  constructor(
    private _http: HttpClient,
    private _fb: FormBuilder
  ) { }

  sendData(data): Observable<Response> {
    return this._http.post<Response>('/api/importer', data);
  }

  upload(file) {

    const formData = new FormData();
    formData.append('file', file);

    const uploadReq = new HttpRequest('POST', '/api/importer/files', formData, {
      reportProgress: true,
    });

    return this._http.request(uploadReq).pipe(
      map(event => {
        console.log('Http event: ', event);
        console.log('Types: ', HttpEventType);
        if (event.type === HttpEventType.UploadProgress) {
            return [null, Math.round(100 * event.loaded / event.total)];
        }
        if (event.type === HttpEventType.Response) {
            return [event.body, 100];
        }
      })
    );
  }

  getGroup(fields: FormGrouper) {
    if (fields == null) {
      return {};
    }
    return Object.keys(fields).reduce(this._fieldToGroupFn(fields), {});
  }

  isObjEmpty(obj) {
    if ( obj == null || obj === undefined) {
      return true;
    }
    return Object.keys(obj).length === 0;
  }

  private _fieldToGroupFn = (fields) => {
    return (acc, key): {} => {
      const field: Fielder<any> = fields[key];
      switch (true) {
        case !this.isObjEmpty(field.group):
          acc[key] = this._fb.group(this.getGroup(field.group));
        break;
        case field.list && field.list.length > 0:
          acc[key] = this._fb.array(
            field.list.map(
              (item: FormGrouper) => this._fb.group(this.getGroup(item))
            )
          );
        break;
        default:
          acc[key] = fields[key].value;
      }
      return acc;
    };
  }
}
