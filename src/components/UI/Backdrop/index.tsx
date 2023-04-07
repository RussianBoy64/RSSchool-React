import { Dispatch, MouseEventHandler } from 'react';
import { ICharacter } from 'helpers/fetchCharacters';

import styles from './styles.module.scss';

interface IBackdropProps {
  closeBackdropHandler: Dispatch<React.SetStateAction<ICharacter | null>>;
  children: React.ReactNode;
}

export default function Backdrop({ closeBackdropHandler, children }: IBackdropProps) {
  const onClickHandler: MouseEventHandler<HTMLDivElement> = (event) => {
    console.log('click');
    if (event.target === event.currentTarget) {
      closeBackdropHandler(null);
    }
  };

  return (
    <div className={styles.backdrop} onClick={onClickHandler}>
      {children}
    </div>
  );
}
