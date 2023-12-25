/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './navigation/App';
import { CTXe, Login, MainScreen, Payments } from './screen.js';


AppRegistry.registerComponent(appName, () => () => <App/>);
