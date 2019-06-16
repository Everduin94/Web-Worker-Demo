/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  // This is running in the web-worker
  console.log('\nData Size: ' + data);
  console.time('Web Worker');
  let val = 'a';
  for (let k = 0; k <= 10; k++) {
    val = 'a';
    for (let i = 0; i <= data; i++) {
      val += 'a';
    }
  }
  console.timeEnd('Web Worker');
  postMessage(val);
});
