import React, { useState } from 'react';
import styles from './AddMovie.module.css';

const AddMovie = ({ movies, setMovies }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [link, setLink] = useState("");
  const [genre, setGenre] = useState("");

  const handleTitle = (e) => { setTitle(e.target.value) }
  const handleLink = (e) => { setLink(e.target.value) }
  const handleDate = (e) => { setDate(e.target.value) }
  const handleGenre = (e) => { setGenre(e.target.value) };

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title === "" || link === "" || date === "" || genre === "") {
      alert("Title, Link, Date, and Genre cannot be empty");
    } else {
      const movie = {
        id: movies.length + 1,
        title: title,
        date: date,
        image: link,
        genre: genre
      }
      setMovies([...movies, movie]);
      alert("Successfully added a new movie");
    }
  }

  const genreOptions = ["Action", "Director", "Drama", "Kartun"];

  return (
    <div className={styles.container}>
      <form className={styles.addmovie} onSubmit={handleSubmit}>
        <input placeholder='Masukkan Title' className={styles.addmovie__input} type='text' value={title} onChange={handleTitle} />
        <input placeholder='Masukkan Link' className={styles.addmovie__input} type='text' value={link} onChange={handleLink} />
        <input placeholder='Pilih Date' className={styles.addmovie__input} type='date' value={date} onChange={handleDate} />
        <select className={styles.addmovie__input} value={genre} onChange={handleGenre}>
          <option value="" disabled>Pilih genre</option>
          {genreOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
        <button className={styles.addmovie__button}>Gasss</button>
      </form>
    </div>
  );
}

export default AddMovie;
