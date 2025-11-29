import React from 'react';
import FastImage, {
  FastImageProps,
  ResizeMode,
} from '@d11/react-native-fast-image';
import {ImageStyle, StyleProp} from 'react-native';

export interface AppImageProps {
  source: FastImageProps['source'];
  width: number;
  height: number;
  borderRadius?: number;
  resizeMode?: ResizeMode;
  tintColor?: string;
  style?: StyleProp<ImageStyle>;
}

export const AppImage: React.FC<AppImageProps> = ({
  source,
  width,
  height,
  borderRadius = 0,
  resizeMode = FastImage.resizeMode.cover,
  tintColor,
  style,
}) => {
  if (!source) {
    return null;
  }

  const mergedStyle: ImageStyle = {
    width,
    height,
    borderRadius,
    tintColor,
    ...(style as ImageStyle),
  };

  return (
    <FastImage
      source={source}
      resizeMode={resizeMode}
      style={mergedStyle as any}
    />
  );
};
