import React from 'react';
import {render} from 'react-dom';

import Routers from './routes.js';
import './main.css';
// import Grap from './Grap.js';//　ｃｏｎｘｔｅｘｔ方法
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();




render(<Routers />,document.getElementById('root'));
