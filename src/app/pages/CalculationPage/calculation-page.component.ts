import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormCreateComponent } from "../../components";

@Component({
  selector: "app-result-page",
  standalone: true,
  templateUrl: "./calculation-page.component.html",
  styleUrls: ["./calculation-page.component.scss"],
  imports: [CommonModule, FormCreateComponent],
})
export class CalculationPage {}
