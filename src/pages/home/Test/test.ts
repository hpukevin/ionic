/**
 * Created by Administrator on 2018/10/07.
 */
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
    selector: 'page-test',
    templateUrl: 'test.html',
  })
export class TestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
