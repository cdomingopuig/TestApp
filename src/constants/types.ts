import { HOME_SCREEN, IMAGE_SCREEN } from 'constants/screens';

export interface LocationProp {
  latitude: number;
  longitude: number;
}

export interface ImageProp {
  url: string;
  location?: LocationProp;
}

export type RootStackParamList = {
  [HOME_SCREEN]: { navigation: object };
  [IMAGE_SCREEN]: { image: ImageProp };
};
