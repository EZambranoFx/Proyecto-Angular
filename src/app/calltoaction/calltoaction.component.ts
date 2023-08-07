import { Component } from '@angular/core';
@Component({
  selector: 'app-calltoaction',
  templateUrl: './calltoaction.component.html',
  styleUrls: ['./calltoaction.component.css']
})
export class CalltoactionComponent {
  chartOptions = {
    title: {
    	text: "KANTO"
    },
    data: [{
      type: "column",
      dataPoints: [
        { label: "Mewto",  y: 40 },
        { label: "Alakazam", y: 60  },
        { label: "Snorlax", y: 75 },
        { label: "Dragonite",  y: 80  },
        { label: "Laprax",  y: 90 }
      ]
    }]                
  };
}
