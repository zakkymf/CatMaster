import {StyleSheet} from 'react-native';

import {Colors} from './Colors';

export const BaseStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flexGrow1: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    backgroundColor: Colors.white,
    elevation: 1,
    borderRadius: 12,
    padding: 16,
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },
  rowBeetweenEnd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  rowBeetweenCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowBetween: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  mVertical10: {
    marginVertical: 10,
  },
  mVertical16: {
    marginVertical: 16,
  },
  mTop4: {
    marginTop: 4,
  },
  mTop8: {
    marginTop: 8,
  },
  mTop12: {
    marginTop: 12,
  },
  mTop16: {
    marginTop: 16,
  },
  mTop24: {
    marginTop: 24,
  },
  mLeft8: {
    marginLeft: 8,
  },
  mLeft12: {
    marginLeft: 12,
  },
  mRight4: {
    marginRight: 4,
  },
  mRight8: {
    marginRight: 8,
  },
  mRight12: {
    marginRight: 12,
  },
  mRight16: {
    marginRight: 16,
  },
  padding12: {
    padding: 12,
  },
  padding16: {
    padding: 16,
  },
  pHorizontal16: {
    paddingHorizontal: 16,
  },
  mHorizontal4: {
    marginHorizontal: 4,
  },
  mHorizontal8: {
    marginHorizontal: 8,
  },
  mHorizontal12: {
    marginHorizontal: 12,
  },
  mHorizontal16: {
    marginHorizontal: 16,
  },
  mBottom16: {
    marginBottom: 16,
  },
  mBottom12: {
    marginBottom: 12,
  },
  mBottom6: {
    marginBottom: 6,
  },
  line: {
    height: 1,
  },
  defaultBtn: {
    height: 48,
  },
});
