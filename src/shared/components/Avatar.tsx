import React from 'react';
import {StyleSheet, View} from 'react-native';
import {StaticText} from './StaticText';
import {Colors} from '../theme';
import {getInitials} from '../utils';

type AvatarProps = {
  size: number;
  name: string;
};

export const Avatar: React.FC<AvatarProps> = ({size, name}) => {
  return (
    <View
      style={StyleSheet.flatten([
        styles.avatar,
        {width: size, height: size, borderRadius: size / 2},
      ])}>
      <StaticText size={15} variant="bold" color={Colors.white}>
        {getInitials(name)}
      </StaticText>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
