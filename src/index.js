import { registerNav, registerHomeClick } from './nav';
import {
  registerMicroApps,
  initGlobalState,
  setDefaultMountApp,
  start,
  addGlobalUncaughtErrorHandler,
} from 'qiankun';
import { HOST } from './utils'
import './index.css';

const apps = [
  {
    name: 'React',
    entry: `//${HOST}:3001`,
    container: '#subapp-container',
    activeRule: '/react',
    path: '/react',
  },
  {
    name: 'Vue',
    entry: `//${HOST}:3002`,
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

// function globalErrorHandle(...args) {
//   console.log('args', args)
// }

// addGlobalUncaughtErrorHandler(globalErrorHandle);

start();


