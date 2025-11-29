import {StyleSheet} from 'react-native';
import {Colors} from '../../../../shared/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  ownerContent: {
    marginTop: 16,
    marginBottom: 16,
  },
  name: {
    marginTop: 4,
    marginBottom: 6,
  },
  button: {
    left: 54,
    right: 54,
    bottom: 20,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.erin_primary_green,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
});
