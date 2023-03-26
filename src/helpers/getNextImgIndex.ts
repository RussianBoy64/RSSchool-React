export default function getNextImgIndex(currentImgIndex: number, totalImages: number): number {
  return currentImgIndex + 1 === totalImages ? 0 : currentImgIndex + 1;
}
