/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from "@components/login";
import CircleButton from "./components/CircleButton";
import NumKeyboard from './components/numKeyboard';

AppRegistry.registerComponent(appName, () => App);
