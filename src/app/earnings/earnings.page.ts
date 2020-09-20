import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.page.html',
  styleUrls: ['./earnings.page.scss'],
})
export class EarningsPage implements OnInit {
  @ViewChild('barChart', { static: false }) barChart;
 time: string = "1"	
  bars: any;
  colorArray: any;
  constructor(private route: Router) { }
  ngOnInit() {
  }
  ionViewDidEnter() {
    this.createBarChart();
  }
  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['16 MAR', '17 MAR', '18 MAR', '19 MAR', '20 MAR', '21 MAR', '22 MAR',],
        datasets: [{
          label: 'Viewers in millions',
          data: [2.5, 5.8, 5, 8.9, 8.9, 7.5, 17],
          backgroundColor: 'rgba(255, 153, 0, 0.53)',
          borderColor: '#ff9900',
          borderWidth: 2
        }]

      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'top',
          labels: {
            fontColor: '#fff',
            fontSize: 14,
            fontFamily: "'Google Sans'",
            boxWidth: 0,
          },
        },
        scales: {
          yAxes: [{
            display: false,
            ticks: {
              beginAtZero: false
            },
            gridLines: {
              drawBorder: false,
            }
          }],
          xAxes: [{
            display: true, 
            gridLines: {
              display: false
            },
            ticks: {
              fontColor: "#000000",
            //  fontSize: "10",
              fontStyle: "normal",
              fontFamily: "Google Sans",
            //  lineWidth: 2, 
            },
          }]
        },
      }
    });
  }
	

send_to_bank() {
    this.route.navigate(['./send-to-bank']);
  } 
}
