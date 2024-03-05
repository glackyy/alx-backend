import { createQueue } from 'kue';

const blacklist = ['4153518780', '4153518781'];

const queue = createQueue();

function sendNotification(phoneNumber, message, job, done) {
  job.progress(0, 100);
  if (blacklist.includes(phoneNumber)) {
    done(Error(`Phone number ${phoneNumber} is blacklisted`));
    return;
  }
}