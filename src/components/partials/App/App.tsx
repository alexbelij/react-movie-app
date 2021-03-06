import React, { FunctionComponent, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { cn } from '@bem-react/classname';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { configureStore, history } from 'store/store';
import '@/assets/sass/main.sass';

import AppNav from 'components/partials/AppNav';
import AppSearch from 'components/partials/AppSearch';
import ErrorBoundary from 'components/partials/AppErrorBoundary';
import AppNotifications from 'components/partials/AppNotifications/AppNotifications';
import AppScrollRestorator from 'components/partials/AppScrollRestorator/AppScrollResorator';

const Home = lazy(() => import('pages/Home'));
const Movie = lazy(() => import('pages/Movie'));
const Error404 = lazy(() => import('pages/Error404'));
const Search = lazy(() => import('pages/Search'));
const PopularMovies = lazy(() => import('pages/PopularMovies'));
const FavoriteMovies = lazy(() => import('pages/Favorite'));
const NowPlayingMovies = lazy(() => import('pages/NowPlayingMovies'));
const UpcomingMovies = lazy(() => import('pages/UpcomingMovies'));
const TopRatedMovies = lazy(() => import('pages/TopRatedMovies'));
const Person = lazy(() => import('pages/Person'));

const b = cn('App');
const w = cn('Wrapper');

const { store, persistor } = configureStore();

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary className={b()}>
          <AppNotifications />
          <ConnectedRouter history={history}>
            <Route render={() => <AppScrollRestorator />} />
            <div className={w()}>
              <AppNav />
              <AppSearch />
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route path='/' exact render={() => <Home />} />
                  <Route path='/movie/:id' exact render={() => <Movie />} />
                  <Route path='/person/:id' exact render={() => <Person />} />
                  <Route path='/search' exact render={() => <Search />} />
                  <Route path='/popular' exact render={() => <PopularMovies />} />
                  <Route path='/favorite' exact render={() => <FavoriteMovies />} />
                  <Route path='/now-playing' exact render={() => <NowPlayingMovies />} />
                  <Route path='/top-rated' exact render={() => <TopRatedMovies />} />
                  <Route path='/upcoming' exact render={() => <UpcomingMovies />} />
                  <Route component={Error404} />
                </Switch>
              </Suspense>
            </div>
          </ConnectedRouter>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
};

export default App;
