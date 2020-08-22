import { ImageRequireSource } from "react-native";

export type HomeStackParamList = {
  HomeScreen: undefined;
  ProductScreen: undefined;
};

export interface SlideObj {
  id: string;
  title: string;
  image: ImageRequireSource;
  subtitle: string;
}
