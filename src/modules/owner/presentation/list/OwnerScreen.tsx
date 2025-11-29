import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {BaseStyles, Colors} from '../../../../shared/theme';
import {
  Avatar,
  Card,
  Header,
  Icon,
  StaticText,
} from '../../../../shared/components';
import Ionicons from '@react-native-vector-icons/ionicons';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../shared/types';

function OwnerScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={StyleSheet.flatten([BaseStyles.flex1, styles.container])}>
      <Header title="John Lennon" showBackButton={false} />

      <View style={styles.content}>
        <View style={BaseStyles.rowBeetweenCenter}>
          <StaticText color={Colors.gray_2}>Owner List</StaticText>

          <Pressable style={BaseStyles.rowCenter}>
            <StaticText size={12} color={Colors.gray_2}>
              Sort by:
            </StaticText>
            <View style={BaseStyles.rowCenter}>
              <StaticText size={12} color={Colors.gray_3}>
                Name
              </StaticText>
              <Ionicons name="caret-down" size={16} color={Colors.gray_3} />
            </View>
          </Pressable>
        </View>

        <View style={styles.list}>
          <Pressable onPress={() => navigation.navigate('OwnerDetail')}>
            <Card>
              <View style={BaseStyles.rowBeetweenCenter}>
                <View style={BaseStyles.rowCenter}>
                  <Avatar size={40} name="John Lennon" />
                  <StaticText style={BaseStyles.mLeft12}>
                    John Lennon
                  </StaticText>
                </View>

                <View style={BaseStyles.rowCenter}>
                  <Icon name="star" size={24} />
                  <Ionicons
                    size={24}
                    name="chevron-forward"
                    color={Colors.gray_3}
                  />
                </View>
              </View>
            </Card>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default OwnerScreen;
