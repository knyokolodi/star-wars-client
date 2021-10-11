import { BrowserRouter as Router, Route } from 'react-router-dom';

import ApolloProvider from './ApolloProvider';

import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './GlobalStyles';

import People from './components/People/People';
import SearchPeople from './components/SearchPeople/SearchPeople';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';

const App = () => {
  return (
    <ApolloProvider>
      <GlobalStyle />
      <Router>
        <Header />
        <Route path='/' exact component={People} />
        <Route path='/search/:name' exact component={SearchPeople} />
        <Footer />
      </Router>
    </ApolloProvider>
  );
};

export default App;
