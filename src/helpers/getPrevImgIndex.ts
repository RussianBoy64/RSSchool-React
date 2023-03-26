export default function getPrevImgIndex(currentImgIndex: number, totalImages: number): number {
  return currentImgIndex === 0 ? totalImages - 1 : currentImgIndex - 1;
}
