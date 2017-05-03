import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private router: Router, public route: ActivatedRoute) {
  }

  type: number;
  num: number;

  ngOnInit() {
    //if you get the context from observable, you need to use "subscribe"
    // if need to verify the paramter is correct, then do the check from subscribe function
    this.route.params.subscribe(p => this.type = +p['type']);
    this.route.queryParams.subscribe(q => this.num = +q['num']);

    //the same route rule, snapshot can not update value from params, it need to use subscribe
    //this.type = this.route.snapshot.params['type']
  }

  GoFlot() {
    //this.router.navigateByUrl('/charts/flot');
    this.router.navigate(['charts', 'flot']);
  }

  GoNext(num: number) {
    let nextId = this.type + num;
    //this.router.navigateByUrl('/charts/' + nextId);
    //this.router.navigate(['cards', nextId]);
    console.log(this.num);
    //相對路徑
    this.router.navigate(['..', nextId,], { relativeTo: this.route, queryParams: { num: this.num + num } })
  }
}
