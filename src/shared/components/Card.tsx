import React from 'react';
import {Platform, Pressable, StyleSheet, View, ViewProps} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView} from '@react-native-community/blur';
import {Colors} from '../theme';

interface CardProps extends ViewProps {
  children: React.ReactNode;
  onPress?: () => void;
}

export const Card = ({children, style, onPress, ...rest}: CardProps) => {
  return (
    <Pressable
      style={[styles.shadowWrapper, style]}
      {...rest}
      onPress={onPress}>
      <View style={styles.inner}>
        {Platform.OS === 'ios' && (
          <BlurView style={styles.blur} blurType="light" blurAmount={12} />
        )}
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 0.7)']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.gradientContainer}>
          {children}
        </LinearGradient>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  shadowWrapper: {
    borderRadius: 16,
    elevation: 2,
    shadowColor: '#6E7191',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.12,
    shadowRadius: 32,
  },
  inner: {
    overflow: 'hidden',
    borderRadius: 16,
    backgroundColor: Colors.white,
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
