import { Component } from 'react';
import { IProduct } from 'components/routes/Main';
import ThumbnailPagination from './ThumbnailPagination';

import getPrevImgIndex from 'helpers/getPrevImgIndex';
import getNextImgIndex from 'helpers/getNextImgIndex';

import styles from './styles.module.scss';

interface IProductCardProps {
  product: IProduct;
}

interface IProductCardState {
  currentImage: number;
}

export default class ProductCard extends Component<IProductCardProps, IProductCardState> {
  constructor(props: IProductCardProps) {
    super(props);
    this.state = {
      currentImage: 0,
    };
  }

  showPrevImg = () => {
    const { images } = this.props.product;
    this.setState({ currentImage: getPrevImgIndex(this.state.currentImage, images.length) });
  };

  showNextImg = () => {
    const { images } = this.props.product;
    this.setState({ currentImage: getNextImgIndex(this.state.currentImage, images.length) });
  };

  render() {
    const { images } = this.props.product;

    return (
      <div className={styles.productCard}>
        <div className={styles.productCard__thumbnail}>
          <div className={styles.thumbnail__control} onClick={this.showPrevImg} />
          <div className={styles.thumbnail__control} onClick={this.showNextImg} />
          <div
            className={styles.thumbnailList}
            style={{ transform: `translateX(-${this.state.currentImage * 100}%)` }}
          >
            {images.map((imageSrc, index) => {
              return (
                <div
                  className={styles.thumbnailList__item}
                  style={{ backgroundImage: `url(${imageSrc})` }}
                  key={index}
                />
              );
            })}

            <div className={styles.thumbnailList__item} />
            <div className={styles.thumbnailList__item} />
          </div>
          <ThumbnailPagination currentImage={this.state.currentImage} images={images} />
        </div>
      </div>
    );
  }
}
