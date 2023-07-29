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
        { label: "Apple",  y: 10  },
        { label: "Orange", y: 15  },
        { label: "Banana", y: 25  },
        { label: "Mango",  y: 30  },
        { label: "Grape",  y: 28  }
      ]
    }]                
  };
}
