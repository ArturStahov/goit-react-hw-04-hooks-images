import { info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/confirm/dist/PNotifyConfirm.css';

export default function ErrorInfo() {
  return info({
    title: 'The input is not correct',
    text: 'Please input another request!!',
    delay: 3000,
  });
}
