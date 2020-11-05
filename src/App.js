import { Provider } from 'react-redux';
import Header from './components/Header';
import ImageGrid from './features/ImageGrid';
import createStore from './store';

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <>
        <Header />
        <ImageGrid />
      </>
    </Provider>
  );
}

export default App;
