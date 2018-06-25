import { Component, OnInit } from '@angular/core';
import {DialogComponent, DialogService} from "ngx-bootstrap-modal";

export interface AlertModel {
  title: string;
  message: string;
}
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent extends DialogComponent<AlertModel, null> implements AlertModel {
  title: string;
  message: string;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
}
