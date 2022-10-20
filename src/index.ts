import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the starter-ext extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'starter-ext:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension starter-ext is activated!');
  }
};

export default plugin;
