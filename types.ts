import { ImageRequireSource } from "react-native";

export type HomeStackParamList = {
  HomeScreen: undefined;
  ProductScreen: { item: Product };
};

export interface Product {
  id: string;
  name: string;
  image: ImageRequireSource;
  subtitle: string;
  description: string;
  company: string;
}
