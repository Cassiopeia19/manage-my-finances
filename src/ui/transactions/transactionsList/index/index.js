import React from "react";
import ReactDOM from "react-dom";
import 'index.css';
import *as serviceWorker from '../../../../serviceWorker.js';

import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cards from '../../../transactions/features/card/Cards';

ReactDOM.render(<Cards/>,document.getElementById('root'));

serviceWorker.unregister()