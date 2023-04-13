import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useAppDispatch } from 'hooks/reduxHooks';
import { ICharacter } from 'services/animeApi';

import styles from './styles.module.scss';

interface ICharacterCardProps {
  showCharacterModal: ActionCreatorWithPayload<ICharacter | null, 'search/setCharacterInfo'>;
  character: ICharacter;
}

export default function CharacterCard({ showCharacterModal, character }: ICharacterCardProps) {
  const dispatch = useAppDispatch();
  const {
    images: { jpg },
    name,
    favorites,
  } = character;

  const onClickHandler = () => dispatch(showCharacterModal(character));

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
