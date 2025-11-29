import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Pressable, FlatList} from 'react-native';
import {BaseStyles, Colors} from '../../../../shared/theme';
import {
  Avatar,
  Card,
  FilterModal,
  Header,
  Icon,
  StaticText,
} from '../../../../shared/components';
import Ionicons from '@react-native-vector-icons/ionicons';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../shared/types';
import {useOwner} from '../useOwner';
import {Owner} from '../../domain/entities/owner';

function OwnerScreen() {
  const filterOptions: Array<'name' | 'cats'> = ['name', 'cats'];
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const {
    owners,
    selectedFilter,
    getOwner,
    addFavorite,
    onSelectOwner,
    onChangeFilter,
  } = useOwner();

  const master = owners.filter(owner => owner.isMaster);

  useEffect(() => {
    getOwner();
    console.log('render');
  }, [selectedFilter]);

  const onCardPress = (item: Owner) => {
    onSelectOwner(item);
    navigation.navigate('OwnerDetail');
  };

  const renderOwners = ({item}: {item: Owner}) => {
    return (
      <Card
        key={item.id}
        style={BaseStyles.mBottom16}
        onPress={() => onCardPress(item)}>
        <View style={BaseStyles.rowBeetweenCenter}>
          <View style={BaseStyles.rowCenter}>
            <Avatar size={40} name={`${item.name} ${item?.lastName}`} />
            <StaticText
              style={
                BaseStyles.mLeft12
              }>{`${item.name} ${item?.lastName}`}</StaticText>
          </View>

          <Pressable
            style={BaseStyles.rowCenter}
            onPress={() => addFavorite(item)}>
            <Icon
              name={item?.isFavorite ? 'star_selected' : 'star'}
              size={24}
            />
            <Ionicons size={24} name="chevron-forward" color={Colors.gray_3} />
          </Pressable>
        </View>
      </Card>
    );
  };

  return (
    <View style={StyleSheet.flatten([BaseStyles.flex1, styles.container])}>
      <Header
        title={`Master: ${master[0]?.name} ${master[0]?.lastName}`}
        initial={`${master[0]?.name} ${master[0]?.lastName}`}
        showBackButton={false}
      />

      <View style={styles.content}>
        <View style={BaseStyles.rowBeetweenCenter}>
          <StaticText color={Colors.gray_2}>Owner List</StaticText>

          <Pressable
            style={BaseStyles.rowCenter}
            onPress={() => setFilterModalVisible(true)}>
            <StaticText size={12} color={Colors.gray_2}>
              Sort By:
            </StaticText>
            <View style={BaseStyles.rowCenter}>
              <StaticText
                size={12}
                color={Colors.gray_3}
                style={StyleSheet.flatten([
                  BaseStyles.mLeft8,
                  BaseStyles.mRight8,
                ])}>
                {selectedFilter}
              </StaticText>
              <Ionicons name="caret-down" size={16} color={Colors.gray_3} />
            </View>
          </Pressable>

          <FilterModal
            visible={isFilterModalVisible}
            onClose={() => setFilterModalVisible(false)}
            filters={filterOptions}
            selectedFilter={selectedFilter}
            onSelectFilter={filter => {
              onChangeFilter(filter as any);
            }}
          />
        </View>

        <View style={styles.list}>
          <FlatList
            data={owners}
            renderItem={renderOwners}
            removeClippedSubviews
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
      </View>
    </View>
  );
}

export default OwnerScreen;
