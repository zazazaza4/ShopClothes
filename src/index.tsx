import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
//react-router-dom
import {
  BrowserRouter as Router,
} from "react-router-dom";
//react-redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

const rootElem = document.getElementById('root');

if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);

  root.render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
  );
}