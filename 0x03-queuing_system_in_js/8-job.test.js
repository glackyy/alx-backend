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

  it('display an error message if jobs is not an array', function() {
    expect(() => createPushNotificationJobs('job', queue)).to.throw(Error, 'Jobs is not an array');
  });
  
  it('Test whether jobs are created', function() {
    const jobs = [
        {
          phoneNumber: '4153518780',
          message: 'This is the code 1234 to verify your account'
        },
        {
          phoneNumber: '4153518781',
          message: 'This is the code 4562 to verify your account'
        },
      ];

      createPushNotificationJobs(jobs, queue);
  })
})