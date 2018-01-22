
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Routes from './Routes';
import App from './components/App';



ReactDOM.render(Routes, document.getElementById('root'));
registerServiceWorker();
