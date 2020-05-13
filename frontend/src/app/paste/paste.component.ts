import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Location} from '@angular/common';

const API_URL  = 'http://localhost:4200/api/pastes/';

interface response {
  id: string,
  name: string,
  text: string,
}

interface Form {
  name: string,
  title: string
}

@Component({
  selector: 'app-paste',
  templateUrl: './paste.component.html',
  styleUrls: ['./paste.component.css']
})
export class PasteComponent implements OnInit {
  private pasteID = null;
  public error = false;
  public response: response = null;
  public createPasteForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private location: Location
  ) {
    this.createPasteForm = this.formBuilder.group({
      text: '',
      name: '',
    });
  }

  // Todo: Add Error Handling
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.pasteID = params.id === undefined ? null : params.id;

      if (this.pasteID !== null) {
        this.httpClient.get<response>(API_URL + this.pasteID)
          .subscribe(results => {
            this.response = results
          })
      }
    })
  }

  // Todo: Add Error Handling
  addPaste(form: Form) {
    this.httpClient.post<response>(API_URL, form)
      .subscribe(results => {
        this.response = results;
        this.location.go(`/${results.id}`)
      })
  }

  onSubmit(value: Form) {
    this.addPaste(value);
    this.createPasteForm.reset()
  }
}
