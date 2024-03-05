import { createQueue } from 'kue';
import { describe, it, before, after, afterEach } from 'mocha';
import { expect } from 'chai';
import createPushNotificationJobs from './8-job.js';

const queue = createQueue();

describe('Test createNotificationJobs function', function() {
  before(function () {
    queue.testMode.enter();
  });
  afterEach(function () {
    queue.testMode.clear();
  });
  after(function () {
    queue.testMode.exit();
  });
})