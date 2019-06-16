import { Component, OnInit } from '@angular/core';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-web-worker',
  templateUrl: './web-worker.component.html',
  styleUrls: ['./web-worker.component.css']
})
export class WebWorkerComponent implements OnInit {

  dataSize = 2000000;

  circle = faCircleNotch;
  loading = false;

  constructor() { }

  ngOnInit() {
    // this.startWebWorker();
  }

  startWebWorker() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker('./web-worker.worker', { type: 'module' });
      worker.onmessage = ({ data }) => {
        // console.log(`page got message: ${data}`);
        this.loading = false; // Hide loading widget
      };
      this.loading = true; // Display loading widget
      worker.postMessage(this.dataSize);
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

  startMain() {

    // Does not display, because Main thread is blocked.
    this.loading = true;

    console.log('Data Size: ' + this.dataSize);
    console.time('Main')
    let val = 'a';
    for (let k = 0; k <= 10; k++) {
      val = 'a';
      for (let i = 0; i <= this.dataSize; i++) {
        val += 'a';
      }
    }
    console.timeEnd('Main');
    this.loading = false;

  }

}
