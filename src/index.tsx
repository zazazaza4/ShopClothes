import { Suspense } from 'react';
//
import ReactDOM from 'react-dom/client';
//style
import './index.css';
//components
import App from './components/App';
import Spinner from './components/Spinner/Spinner';
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
          <Suspense fallback={<Spinner/>}>
            <App />
          </Suspense>
        </Router>
      </Provider>
  );
}