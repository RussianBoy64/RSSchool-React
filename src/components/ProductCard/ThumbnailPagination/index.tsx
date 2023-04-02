import styles from './styles.module.scss';

interface IThumbnailPaginationProps {
  currentImage: number;
  images: string[];
}

const setPagintationItemStyle = (isActive: boolean): string => {
  const itemStyle = [styles.thumbnailPagination__item];

  if (isActive) itemStyle.push(styles.thumbnailPagination__item_active);

  return itemStyle.join(' ');
};

export default function ThumbnailPagination({ currentImage, images }: IThumbnailPaginationProps) {
  return (
    <div className={styles.thumbnailPagination}>
      {images.map((_, index) => {
        const itemStyle = setPagintationItemStyle(index === currentImage);

        return <span className={itemStyle} key={index} data-testid="pagination" />;
      })}
    </div>
  );
}
