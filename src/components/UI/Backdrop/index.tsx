import { MouseEventHandler } from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useAppDispatch } from 'hooks/reduxHooks';
import { ICharacter } from 'services/animeApi';

import styles from './styles.module.scss';

interface IBackdropProps {
  closeBackdropHandler: ActionCreatorWithPayload<ICharacter | null, 'search/setCharacterInfo'>;
  children: React.ReactNode;
}

export default function Backdrop({ closeBackdropHandler, children }: IBackdropProps) {
  const dispatch = useAppDispatch();
  const onClickHandler: MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target === event.currentTarget) {
      dispatch(closeBackdropHandler(null));
    }
  };

  return (
    <div className={styles.backdrop} onClick={onClickHandler} data-testid="backdrop">
      {children}
    </div>
  );
}
