import React, {useEffect} from 'react';
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
import {useOwner} from '../useOwner';

export const OwnerDetailScreen = () => {
  const {owners, detailOwner, makeMaster, getDetailOwner} = useOwner();

  const master = owners.filter(owner => owner.isMaster);

  useEffect(() => {
    getDetailOwner();
  }, []);

  return (
    <View style={StyleSheet.flatten([BaseStyles.flex1, styles.container])}>
      <Header
        title={`Master: ${master[0]?.name} ${master[0]?.lastName}`}
        initial={`${master[0]?.name} ${master[0]?.lastName}`}
        showBackButton={false}
      />

      <View style={styles.content}>
        <View style={BaseStyles.mBottom16}>
          <StaticText color={Colors.gray_2}>Owner Card</StaticText>

          <View style={styles.ownerContent}>
            <Card>
              <View style={BaseStyles.rowBeetweenCenter}>
                <Avatar
                  name={`${detailOwner?.name} ${detailOwner?.lastName}`}
                  size={56}
                />
                <View>
                  <View>
                    <StaticText size={12} color={Colors.gray_2}>
                      First Name
                    </StaticText>
                    <StaticText color={Colors.gray} style={styles.name}>
                      {detailOwner?.name}
                    </StaticText>
                  </View>
                  <View>
                    <StaticText size={12} color={Colors.gray_2}>
                      Last Name
                    </StaticText>
                    <StaticText color={Colors.gray} style={styles.name}>
                      {detailOwner?.lastName ?? '-'}
                    </StaticText>
                  </View>
                </View>
                <Icon
                  name={detailOwner?.isFavorite ? 'star_selected' : 'star'}
                  size={24}
                />
              </View>
            </Card>
          </View>
        </View>

        {detailOwner && detailOwner?.cats?.length > 0 ? (
          <View style={BaseStyles.mBottom16}>
            <StaticText color={Colors.gray_2}>Cats</StaticText>

            {detailOwner?.cats?.map(cat => (
              <View style={styles.ownerContent}>
                <Card>
                  <View style={BaseStyles.rowBeetweenCenter}>
                    <View>
                      <StaticText variant="bold" color={Colors.gray}>
                        {cat?.name}
                      </StaticText>
                      <StaticText
                        size={12}
                        color={Colors.gray_2}
                        style={BaseStyles.mTop8}>
                        Age : {cat?.age ?? '-'} years
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
            ))}
          </View>
        ) : null}

        <Pressable
          style={styles.button}
          onPress={() => makeMaster(detailOwner)}>
          <StaticText size={18} color={Colors.white}>
            Make Master
          </StaticText>
        </Pressable>
      </View>
    </View>
  );
};
