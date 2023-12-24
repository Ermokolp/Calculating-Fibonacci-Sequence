if (window.Worker) {
    const fibonacciWorker = new Worker('fibonacciWorker.js');

    fibonacciWorker.onmessage = function(event) {
        console.log('Fibonacci sequence:', event.data);
    };

    fibonacciWorker.postMessage(10); // Calculate Fibonacci sequence for 10 numbers
} else {
    console.error('Web Workers are not supported in this browser.');
}
