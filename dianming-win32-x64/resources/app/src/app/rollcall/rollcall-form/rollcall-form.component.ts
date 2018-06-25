import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RollcallService} from "../rollcall.service";
import {DialogService} from "ngx-bootstrap-modal";

@Component({
  selector: 'app-rollcall-form',
  templateUrl: './rollcall-form.component.html',
  styleUrls: ['./rollcall-form.component.css']
})
export class RollcallFormComponent implements OnInit {

  public static umajor:any;
  public static urole:any;
  isPass = '';
  cid = '';
  formModel: FormGroup;
  private calls:Array<any>;
  constructor(private routeInfo:ActivatedRoute,private callService:RollcallService,public router:Router,
              public dialogService: DialogService) { }

  ngOnInit() {
    let cardId = this.routeInfo.snapshot.params['id'];
    console.log(cardId);
    this.callService.getRollById(cardId).subscribe(
      result=>{
        this.calls = result.callTheRolls;
        let fb = new FormBuilder();
        this.cid = this.calls[0].autoid;
        this.formModel = fb.group({
            autoid:[this.calls[0].autoid,Validators.required],
            coursename:[this.calls[0].courseName,Validators.required],
            ID:[this.calls[0].ID,Validators.required],
            callstate:[this.calls[0].callstate,Validators.required],
            calldate:[this.calls[0].calldate,Validators.required],
            callposition:[this.calls[0].callposition,Validators.required]
          }
        );
      });
  }

  save(){

  }

  cancel(){

  }
}
