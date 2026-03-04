'use strict';

const { NodeSDK } = require('@opentelemetry/sdk-node');
const { ConsoleSpanExporter, SimpleSpanProcessor } = require('@opentelemetry/sdk-trace-base');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');

const sdk = new NodeSDK({
  // This prints spans to console
  spanProcessor: new SimpleSpanProcessor(new ConsoleSpanExporter()),
  // This auto-instruments Express + HTTP + more
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();

process.on('SIGINT', () => sdk.shutdown().finally(() => process.exit(0)));
process.on('SIGTERM', () => sdk.shutdown().finally(() => process.exit(0)));
