import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView} from '@react-native-community/blur';

interface CardProps extends ViewProps {
  children: React.ReactNode;
}

export const Card = ({children, style, ...rest}: CardProps) => {
  return (
    <View style={[styles.shadowWrapper, style]} {...rest}>
      <BlurView style={styles.blur} blurType="light" blurAmount={12} />

      <LinearGradient
        colors={['rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 0.7)']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.gradientContainer}>
        {children}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  shadowWrapper: {
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#6E7191',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.12,
    shadowRadius: 32,
    elevation: 12,
  },
  blur: {
    ...StyleSheet.absoluteFillObject,
  },
  gradientContainer: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
  },
});
