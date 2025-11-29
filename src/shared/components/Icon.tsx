import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {icons, IconName} from '../assets/icons';
import {AppImage} from './AppImage';

export interface IconProps {
  name: IconName;
  size: number;
  color?: string;
  borderRadius?: number;
  style?: StyleProp<ViewStyle>;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size,
  color,
  borderRadius = 0,
  style,
}) => {
  const source = icons[name];

  if (!source) {
    return null;
  }

  return (
    <AppImage
      source={source}
      width={size}
      height={size}
      borderRadius={borderRadius}
      tintColor={color}
      style={style as any}
    />
  );
};
