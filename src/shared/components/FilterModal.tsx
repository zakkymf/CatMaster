import React from 'react';
import {View, Pressable, Modal, FlatList, StyleSheet} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import {StaticText} from './StaticText';
import {Colors} from '../theme';

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
  filters: string[];
  selectedFilter: string;
  onSelectFilter: (filter: string) => void;
}

export const FilterModal: React.FC<FilterModalProps> = ({
  visible,
  onClose,
  filters,
  selectedFilter,
  onSelectFilter,
}) => {
  const renderItem = ({item}: {item: string}) => (
    <Pressable
      style={styles.option}
      onPress={() => {
        onSelectFilter(item);
        onClose();
      }}>
      <StaticText
        color={
          item === selectedFilter ? Colors.erin_primary_green : Colors.gray
        }>
        {item}
      </StaticText>
      {item === selectedFilter && (
        <Ionicons
          name="checkmark"
          size={16}
          color={Colors.erin_primary_green}
        />
      )}
    </Pressable>
  );

  return (
    <Modal visible={visible} transparent animationType="fade">
      <Pressable style={styles.backdrop} onPress={onClose}>
        <View style={styles.modalContainer}>
          <FlatList
            data={filters}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 250,
    backgroundColor: Colors.white,
    borderRadius: 12,
    paddingVertical: 12,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
});
