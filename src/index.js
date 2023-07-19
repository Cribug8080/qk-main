import { registerNav, registerHomeClick } from './nav';
import {
  registerMicroApps,
  initGlobalState,
  setDefaultMountApp,
  start,
  addGlobalUncaughtErrorHandler,
} from 'qiankun';

const apps = [
  {
    name: 'React',
    entry: '//localhost:3001',
    container: '#subapp-container',
    activeRule: '/react',
    path: '/react',
  },
  {
    name: 'Vue',
    entry: '//localhost:3002',
    container: '#subapp-container',
    path: '/vue',
    activeRule: '/vue',
  }
]

registerMicroApps(apps, {
  beforeMount(app) {
    console.log('beforeMount', app)
  },
  beforeLoad(app) {
    console.log('beforeLoad', app)
  },
});

registerNav(apps, document.querySelector('.micro-header-nav'));
registerHomeClick('.micro-header-logo');

window.addEventListener('popstate', () => {
  registerNav(apps, document.querySelector('.micro-header-nav'));
});

// setDefaultMountApp('/');

window.addEventListener('single-spa:before-app-change', (evt) => {
  console.log('single-spa is about to mount/unmount applications!');
  console.log(evt.detail.originalEvent) // PopStateEvent
  console.log(evt.detail.newAppStatuses) // { app1: MOUNTED }
  console.log(evt.detail.appsByNewStatus) // { MOUNTED: ['app1'], NOT_MOUNTED: [] }
  console.log(evt.detail.totalAppChanges) // 1
});

function globalErrorHandle(...args) {
  console.log('args', args)
}

addGlobalUncaughtErrorHandler(globalErrorHandle);

start();


