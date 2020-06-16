import { Component, OnInit } from "@angular/core";
import { cribs } from "./../data/cribs";

@Component({
  selector: "app-property-listing",
  templateUrl: "./property-listing.component.html",
  styleUrls: ["./property-listing.component.css"],
})
export class PerpertyListingComponent implements OnInit {
  cribs: Array<any> = cribs;
  constructor() {}

  ngOnInit() {}
}
