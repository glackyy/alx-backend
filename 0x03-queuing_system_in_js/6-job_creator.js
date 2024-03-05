import { createQueue } from 'kue';

const queue = createQueue();

const notif = {
  'phoneNumber': '0123456789',
  'message': 'Code to verify your account'
}

const job = queue.create('push_notification_code', notif).save(function (error) {
  if (!error) {
    console.log(`Notification job created: ${job.id}`);
  }
});

job.on('complete', function() {
  console.log('Notification job completed');
}).on('failed', function() {
  console.log('Notification job failed');
});
