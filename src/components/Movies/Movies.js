
import React from 'react';
import styles from './Movies.module.css';
import Movie from '../Movie/Movie';

const Movies = (props) => {
    const { items } = props;
  
    return (
      <div className={styles.container}>
        <section className={styles.movies}>
          <h2 className={styles.movies__title}>Latest Movies</h2>
          <div className={styles.movie__container}>
            {items && items.map(function (data) {
              return (
                <Movie key={data.id} title={data.title} date={data.date} image={data.image} />
              );
            })}
          </div>
        </section>
      </div>
    );
  };

export default Movies;
