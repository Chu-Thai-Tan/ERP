import './polyfill';

import HomeStack from './routes/homeStack';
import AuthStack from './routes/authStack';

function App(): JSX.Element {
  const isLogin = true;
  return isLogin ? <HomeStack /> : <AuthStack />;
}

export default App;
