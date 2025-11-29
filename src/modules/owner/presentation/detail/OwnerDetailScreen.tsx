import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {
  Avatar,
  Card,
  Header,
  Icon,
  StaticText,
} from '../../../../shared/components';
import {BaseStyles, Colors} from '../../../../shared/theme';
import Ionicons from '@react-native-vector-icons/ionicons';
import {styles} from './styles';

export const OwnerDetailScreen = () => {
  return (
    <View style={StyleSheet.flatten([BaseStyles.flex1, styles.container])}>
      <Header title="John Lennon" />

      <View style={styles.content}>
        <View style={BaseStyles.mBottom16}>
          <StaticText color={Colors.gray_2}>Owner Card</StaticText>

          <View style={styles.ownerContent}>
            <Card>
              <View style={BaseStyles.rowBeetweenCenter}>
                <Avatar name="John Lennon" size={56} />
                <View>
                  <View>
                    <StaticText size={12} color={Colors.gray_2}>
                      First Name
                    </StaticText>
                    <StaticText color={Colors.gray} style={styles.name}>
                      John
                    </StaticText>
                  </View>
                  <View>
                    <StaticText size={12} color={Colors.gray_2}>
                      Last Name
                    </StaticText>
                    <StaticText color={Colors.gray} style={styles.name}>
                      Lennon
                    </StaticText>
                  </View>
                </View>
                <Icon name="star" size={24} />
              </View>
            </Card>
          </View>
        </View>

        <View style={BaseStyles.mBottom16}>
          <StaticText color={Colors.gray_2}>Cats</StaticText>

          <View style={styles.ownerContent}>
            <Card>
              <View style={BaseStyles.rowBeetweenCenter}>
                <View>
                  <StaticText variant="bold" color={Colors.gray}>
                    First Name
                  </StaticText>
                  <StaticText
                    size={12}
                    color={Colors.gray_2}
                    style={BaseStyles.mTop8}>
                    John
                  </StaticText>
                </View>
                <Ionicons
                  size={24}
                  name="chevron-forward"
                  color={Colors.gray_3}
                />
              </View>
            </Card>
          </View>
        </View>

        <Pressable style={styles.button}>
          <StaticText size={18} color={Colors.white}>
            Make Master
          </StaticText>
        </Pressable>
      </View>
    </View>
  );
};
