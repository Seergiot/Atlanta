import React from 'react';
import { hydrate, render } from "react-dom";
import AtlantaApp from './atlanta/AtlantaApp';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FlashComponent from './atlanta/app/component/FlashComponent';
import FlashEndPointComponent from './atlanta/app/component/FlashEndPointComponent';

declare global {
    interface Window { FlashComponent: any; FlashInterface: any; flashvars:any; }
}

const rootElement = document.getElementById('root');

if (rootElement != null && rootElement.hasChildNodes()) {
    hydrate(<AtlantaApp />, rootElement);
} else {
    render(<AtlantaApp />, rootElement);
}
 
window.FlashComponent = new FlashComponent();
window.FlashInterface = new FlashEndPointComponent();