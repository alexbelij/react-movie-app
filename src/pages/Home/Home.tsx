import React, { FunctionComponent, useEffect } from 'react';

import AppIntro from 'components/ui/AppIntro';
import AppCarousel from 'components/ui/AppCarousel';
import AppContent from 'components/ui/AppContent';
import AppFooter from 'components/partials/AppFooter';
import AppSpin from 'components/ui/AppSpin/AppSpin';

import { useDispatch, useSelector } from 'react-redux';
import { fetchLatestMovieStart } from 'store/movie/latest/actions';
import { fetchPopularMoviesStart } from 'store/movie/popular/actions';
import { getPopularMovies } from 'store/movie/popular/selectors';
import { getLatestMovie } from 'store/movie/latest/selectors';
import { getNowPlayingMovies } from 'store/movie/now-playing/selectors';
import { fetchNowPlayingMoviesStart } from 'store/movie/now-playing/actions';
import { getTopRatedMovies } from 'store/movie/top-rated/selectors';
import { fetchTopRatedMoviesStart } from 'store/movie/top-rated/actions';
import { getUpcomingMovies } from 'store/movie/upcoming/selectors';
import { fetchUpcomingMoviesStart } from 'store/movie/upcoming/actions';

const Home: FunctionComponent = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(getPopularMovies);
  const nowPlayingMovies = useSelector(getNowPlayingMovies);
  const topRatedMovies = useSelector(getTopRatedMovies);
  const upcomingMovies = useSelector(getUpcomingMovies);
  const latestMovie = useSelector(getLatestMovie);

  useEffect(() => {
    document.title = 'Home, sweet home :: 💚';
    dispatch(fetchLatestMovieStart());
    dispatch(fetchPopularMoviesStart());
    dispatch(fetchTopRatedMoviesStart());
    dispatch(fetchNowPlayingMoviesStart());
    dispatch(fetchUpcomingMoviesStart());
  }, [dispatch]);

  return (
    <>
      <AppContent>
        <AppIntro
          backdrop_path={latestMovie?.backdrop_path}
          id={latestMovie?.id}
          original_title={latestMovie?.original_title}
          overview={latestMovie?.overview}
          release_date={latestMovie?.release_date}
          runtime={latestMovie?.runtime}
          vote_average={latestMovie?.vote_average}
        />
        {nowPlayingMovies ? (
          <AppCarousel title='Now playing movies' link='/now-playing' items={nowPlayingMovies.results} />
        ) : (
          <AppSpin minHeight={563} />
        )}
        {popularMovies ? (
          <AppCarousel title='Popular movies' link='/popular' items={popularMovies.results} />
        ) : (
          <AppSpin minHeight={563} />
        )}
        {upcomingMovies ? (
          <AppCarousel title='Upcoming movies' link='/upcoming' items={upcomingMovies.results} />
        ) : (
          <AppSpin minHeight={563} />
        )}
        {topRatedMovies ? (
          <AppCarousel title='Top rated movies' link='/top-rated' items={topRatedMovies.results} />
        ) : (
          <AppSpin minHeight={563} />
        )}
      </AppContent>
      <AppFooter />
    </>
  );
};

export default Home;
