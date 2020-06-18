import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './dashboard.page';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule],
    declarations: [DashboardPage]
})

@NgModule({
  imports: [
    BrowserModule,
 
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      
    })
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class DashboardPageModule {}
export class AppModule { }

const Score = (percent: number) : string => {
  if (percent >= 100){return "Congratulations!"}
  else if(percent >= 50){return "Half"}
  else if(percent > 0){return "Just began"}
  else {return "Not started"}
}

