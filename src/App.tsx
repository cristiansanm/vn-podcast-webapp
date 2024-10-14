import { Provider } from 'react-redux';
import { Header } from './pages';
import { PodcastsList } from './modules/PodcastsList/page';
import { store } from './redux/store/store';
import { Divider } from './components';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Divider size={2} />
      <PodcastsList />
    </Provider>
  );
}

export default App;
