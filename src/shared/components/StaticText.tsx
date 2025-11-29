import React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';

interface StaticTextProps extends TextProps {
  children: React.ReactNode;
  variant?: 'regular' | 'medium' | 'bold';
  size?: number;
  color?: string;
  style?: TextStyle | TextStyle[];
}

const FONT_MAP = {
  regular: 'CircularStd-Book',
  medium: 'CircularStd-Medium',
  bold: 'CircularStd-Bold',
} as const;

export const StaticText = ({
  children,
  variant = 'regular',
  size = 14,
  color = '#000000',
  style,
  ...rest
}: StaticTextProps) => {
  return (
    <Text
      {...rest}
      style={[
        {
          fontFamily: FONT_MAP[variant],
          fontSize: size,
          color,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};
