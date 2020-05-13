import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface response {
  id: string,
  name: string,
  text: string,
}


@Injectable({
  providedIn: 'root'
})
export class PasteService {
  private API_URL  = 'api/pastes/';

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * Returns an observable that contains information for the requested paste.
   *
   * @param pasteID The ID for the paste that the user wishes to view.
   * @return An observable that will contain the response.
   */
  getPaste(pasteID: string): Observable<response> {
    return this.httpClient.get<response>(this.API_URL + pasteID);
  }

  /**
   * Creates a new paste.
   *
   * @param pasteDetails The details about the paste (name and text)
   * @return An observable that will contain the response.
   */
  createPaste(pasteDetails): Observable<response> {
    return this.httpClient.post<response>(this.API_URL, pasteDetails);
  }
}
