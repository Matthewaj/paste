import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Location} from '@angular/common';
import {PasteService, response} from '../paste.service';


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
  public response: response = null;
  public createPasteForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paste: PasteService,
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
        this.paste.getPaste(this.pasteID)
          .subscribe(response => this.response = response)
      }
    })
  }

  onSubmit(form: Form) {
    this.paste.createPaste(form)
      .subscribe(results => {
        this.response = results;
        this.location.go(`/${results.id}`)
      });
    this.createPasteForm.reset()
  }
}
