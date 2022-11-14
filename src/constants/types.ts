import { HOME_SCREEN, IMAGE_SCREEN } from './screens';

export interface ImageProp {
  url: string;
  location?: string;
}

export type RootStackParamList = {
  [HOME_SCREEN]: { navigation: object };
  [IMAGE_SCREEN]: { image: ImageProp };
};
