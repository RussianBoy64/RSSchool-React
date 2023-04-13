import { ICharacter } from 'services/animeApi';

import styles from './styles.module.scss';

interface ICharacterInfoProps {
  character: ICharacter;
}

export default function CharacterInfo({ character }: ICharacterInfoProps) {
  const {
    mal_id,
    name,
    name_kanji,
    url,
    about,
    images: { jpg },
    favorites,
  } = character;

  const kanji = name_kanji || 'No info!';
  const aboutText = about ? `${about.substring(0, 170)}...` : 'No about info!';

  return (
    <div className={styles.characterInfo__container}>
      <img className={styles.characterInfo__img} src={jpg.image_url} alt={`${name} image`} />
      <div className={styles.characterInfo__description}>
        <h3 className={styles.description__name}>{name}</h3>
        <div className={styles.description__id}>
          <span className={styles.description__fieldTitle}>Id: </span>
          {mal_id}
          <span className={styles.description__favorites}>
            <i className={`fa-solid fa-heart ${styles.description__heart}`} />
            {favorites}
          </span>
        </div>
        <h4 className={styles.description__nameKanji}>
          <span className={styles.description__fieldTitle}>Kanji: </span>
          {kanji}
        </h4>
        <p className={styles.description__about}>
          <span className={styles.description__fieldTitle}>
            About: <br />
          </span>
          {aboutText}
        </p>
        <a
          className={styles.description__link}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </a>
      </div>
    </div>
  );
}
