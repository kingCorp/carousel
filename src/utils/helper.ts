import {Slide} from '../types';

export const arrayOfStrings = (slides: Slide[]): string[] => {
  let imagesArray: string[] = [];
  slides.map(slide => slide.images.map(image => imagesArray.push(image)));
  return imagesArray;
};
