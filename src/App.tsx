import './polyfill';

import HomeStack from './routes/homeStack';
import AuthStack from './routes/authStack';
import { Provider } from 'react-redux';
import { store } from './store';

function App(): JSX.Element {
  const isLogin = true;
  return (
    <Provider store={store}>{isLogin ? <HomeStack /> : <AuthStack />}</Provider>
  );
}

export default App;
