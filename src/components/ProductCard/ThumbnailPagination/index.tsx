import { Component } from 'react';

import styles from './styles.module.scss';

interface IThumbnailPaginationProps {
  currentImage: number;
  images: string[];
}

export default class ThumbnailPagination extends Component<IThumbnailPaginationProps> {
  render() {
    const { currentImage, images } = this.props;

    return (
      <div className={styles.thumbnailPagination}>
        {images.map((_, index) => {
          const itemStyle = [styles.thumbnailPagination__item];

          if (index === currentImage) itemStyle.push(styles.thumbnailPagination__item_active);

          return <span className={itemStyle.join(' ')} key={index} />;
        })}
      </div>
    );
  }
}
