# WebWorkersDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.1.

## Usage

Make sure you have Node and the Angular CLI installed.

From a unix-based terminal (I use git-bash on Windows)

```
git clone https://github.com/Everduin94/Web-Worker-Demo.git
cd Web-Worker-Demo
npm install
ng serve --o
```

The application is not configured to run the worker or main thread on start-up. So if you want to see the effect on performance when running lighthouse go to src/app/web-worker/web-worker.component.ts and enabled either `this.startWebWorker();` or `this.startMain()` inside of the `ngOnInit(){}` method.

However, you can simulate either by performing a single click on the web worker or main button. Notice, a widget appears when using the web worker and the hover css classes can still toggle. This illustrates why we use the web worker. When we click the main button, the UI is locked. -- The tester button is an additional illustration. Click while running main, the component will not appear until after the process is finished.

## Article
https://medium.com/@erxk_verduin/improve-performance-with-web-workers-497931fdef1b
