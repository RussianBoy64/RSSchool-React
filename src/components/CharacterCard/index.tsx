// import { useState } from 'react';
import { ICharacter } from 'helpers/fetchCharacters';

import styles from './styles.module.scss';

interface ICharacterCardProps {
  character: ICharacter;
}

export default function CharacterCard({ character }: ICharacterCardProps) {
  const {
    images: { jpg },
    name,
    favorites,
  } = character;

  return (
    <div className={styles.characterCard}>
      <img className={styles.characterCard__img} src={jpg.image_url} alt={`${name} image`} />
      <div className={styles.description}>
        <span className={styles.description__name}>{name}</span>

        <span className={styles.description__favorites}>
          <i className={`fa-solid fa-heart ${styles.description__heart}`} />
          {favorites}
        </span>
      </div>
    </div>
  );
}
