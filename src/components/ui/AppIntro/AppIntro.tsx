/* eslint-disable @typescript-eslint/camelcase */
import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';

import { Link } from 'react-router-dom';
import AppRating from 'components/ui/AppRating';
import AppButton from 'components/ui/AppButton';
import AppIcon from 'components/ui/AppIcon';
import AppLazyImage from 'components/ui/AppLazyImage';

import { minutesToHoursAndMinutes } from 'utils/minutesToHoursAndMinutes';
import { buildImagePath } from 'utils/buildImagePath';
import { BackdropSizes } from 'common/types/images-sizes';

import './AppIntro.sass';

const b = cn('Intro');

interface IProps {
  id: number | undefined;
  original_title: string | undefined;
  vote_average: number | undefined;
  release_date: Date | undefined;
  runtime: number | undefined;
  overview: string | undefined;
  backdrop_path: string | undefined;
}

const AppIntro: FunctionComponent<IProps> = ({
  id,
  original_title,
  vote_average,
  release_date,
  runtime,
  overview,
  backdrop_path,
}) => {
  return (
    <div className={b()}>
      <div className={b('Inner')}>
        {id && original_title && (
          <h1 className={classnames(b('Title'), 'Title')}>
            <Link to={`/movie/${id}`}>{original_title}</Link>
          </h1>
        )}

        <div className={b('Info')}>
          {vote_average ? <AppRating rating={vote_average} className={b('Rating')} /> : null}

          <div className={b('MetaInfo')}>
            {release_date ? (
              <span className={classnames(b('Year'), b('Meta'))}>{new Date(release_date).getUTCFullYear()}</span>
            ) : null}
            {runtime ? (
              <time className={classnames(b('Duration'), b('Meta'))}>{minutesToHoursAndMinutes(runtime)}</time>
            ) : null}
          </div>
        </div>

        {overview ? <p className={b('Desc')}>{overview}</p> : null}

        {/*{video ? (*/}
        {/*  <AppButton className={b('Btn')}>*/}
        {/*    <AppIcon className='Btn-Icon' icon='icon-play' width={14} height={14} />*/}
        {/*    Watch trailer*/}
        {/*  </AppButton>*/}
        {/*) : null}*/}
      </div>

      {backdrop_path ? (
        <figure className={b('Figure')}>
          <picture className={b('Pic')}>
            <AppLazyImage image={`${buildImagePath(backdrop_path, BackdropSizes.w1280)}`} className={b('Img')} />
          </picture>
        </figure>
      ) : null}
    </div>
  );
};

export default AppIntro;
