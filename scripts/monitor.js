// Monitor script for production system health
const os = require('os');
const { performance } = require('perf_hooks');

const config = require('../config/app-config.yaml');
const LOG_LEVEL = config.logging.level || 'INFO';

function log(message, level = 'INFO') {
    if (LOG_LEVEL === 'DEBUG' || LOG_LEVEL === level) {
        console.log(`[${new Date().toISOString()}] [${level}] ${message}`);
    }
}

function runPerformanceCheck() {
    const t0 = performance.now();
    // Simulate complex health check logic
    for (let i = 0; i < 1e6; i++) {}
    const t1 = performance.now();
    log(`Health check completed in ${t1 - t0} ms.`, 'DEBUG');
    return t1 - t0;
}

function checkSystemHealth() {
    log("Running system health check...");
    
    // Check CPU/Memory load
    const cpuLoad = os.loadavg()[0];
    const freeMemory = os.freemem() / 1024 / 1024; // MB

    if (cpuLoad > 2.0) {
        log(`WARNING: High CPU Load: ${cpuLoad}`, 'WARN');
    }
    if (freeMemory < 100) {
        log(`ALERT: Low Free Memory: ${freeMemory.toFixed(2)} MB`, 'ALERT');
    }

    // New AI-related check
    if (config.experimental.ai_enabled) {
        // Placeholder for new AI model status check
        log("Checking AI model stability (Experimental)...", 'DEBUG');
    }

    const performanceTime = runPerformanceCheck();
    if (performanceTime > 50) {
        log(`PERF ALERT: Slow check time: ${performanceTime}ms`, 'WARN');
    }

    log("System check finished.");
}

// Run health check every 30 seconds
setInterval(checkSystemHealth, 30000);
log(`Monitoring script started. Level: ${LOG_LEVEL}`);
checkSystemHealth();