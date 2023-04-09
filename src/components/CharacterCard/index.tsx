import { Dispatch } from 'react';
import { ICharacter } from 'helpers/fetchCharacters';

import styles from './styles.module.scss';

interface ICharacterCardProps {
  closeBackdropHandler: Dispatch<React.SetStateAction<ICharacter | null>>;
  character: ICharacter;
}

export default function CharacterCard({ closeBackdropHandler, character }: ICharacterCardProps) {
  const {
    images: { jpg },
    name,
    favorites,
  } = character;

  const onClickHandler = () => closeBackdropHandler(character);

  return (
    <div className={styles.characterCard} onClick={onClickHandler} data-testid="character">
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
