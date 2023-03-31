import { useState } from 'react';
import { IProduct } from 'components/routes/Main';
import ThumbnailPagination from './ThumbnailPagination';

import getPrevImgIndex from 'helpers/getPrevImgIndex';
import getNextImgIndex from 'helpers/getNextImgIndex';

import styles from './styles.module.scss';

interface IProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const { title, description, price, stock, category, images } = product;
  const thumbnailListStyle = { transform: `translateX(-${currentImageIndex * 100}%)` };

  const showPrevImg = () => {
    const { images } = product;
    setCurrentImageIndex(getPrevImgIndex(currentImageIndex, images.length));
  };

  const showNextImg = () => {
    const { images } = product;
    setCurrentImageIndex(getNextImgIndex(currentImageIndex, images.length));
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.productCard__thumbnail}>
        <div className={styles.thumbnail__control} onClick={showPrevImg} />
        <div className={styles.thumbnail__control} onClick={showNextImg} />
        <div className={styles.thumbnailList} style={thumbnailListStyle}>
          {images.map((imageSrc, index) => {
            return (
              <div
                className={styles.thumbnailList__item}
                style={{ backgroundImage: `url(${imageSrc})` }}
                key={index}
              />
            );
          })}
        </div>
        <ThumbnailPagination currentImage={currentImageIndex} images={images} />
      </div>
      <div className={styles.description}>
        <span className={styles.description__category}>{category}</span>
        <span className={styles.description__title}>{title}</span>
        <span className={styles.description__description}>{description}</span>
        <span className={styles.description__price}>{price} $</span>
        <span className={styles.description__stock}>Stock: {stock}</span>
      </div>
    </div>
  );
}
