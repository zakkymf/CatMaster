import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {BaseStyles, Colors} from '../theme';
import {StaticText} from './StaticText';
import Ionicons from '@react-native-vector-icons/ionicons';
import {getInitials} from '../utils';
import {useNavigation} from '@react-navigation/native';

type HeaderProps = {
  title: string;
  showBackButton?: boolean;
  headerRight?: React.ReactNode;
  onBackPress?: () => void;
};

export const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = true,
  headerRight,
  onBackPress,
}) => {
  const navigation = useNavigation();

  const onBack = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };
  return (
    <View style={styles.container}>
      {showBackButton ? (
        <Pressable onPress={onBack}>
          <Ionicons name="arrow-back" size={24} color={Colors.gray} />
        </Pressable>
      ) : (
        <View />
      )}

      <View style={BaseStyles.rowCenter}>
        <View style={styles.avatar}>
          <StaticText variant="bold" color={Colors.erin_primary_green}>
            {getInitials(title)}
          </StaticText>
        </View>
        <StaticText color={Colors.gray} style={styles.title}>
          {title}
        </StaticText>
      </View>

      {headerRight ? (
        <View style={BaseStyles.rowCenter}>{headerRight}</View>
      ) : (
        <View />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    ...BaseStyles.rowBeetweenCenter,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderColor: Colors.erin_primary_green,
  },
  title: {
    marginLeft: 16,
  },
});
