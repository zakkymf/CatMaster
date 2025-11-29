import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Navigation from './src/navigation/Navigation';
import {StatusBar, StyleSheet} from 'react-native';
import {Colors} from './src/shared/theme';
import {queryClient} from './src/shared/libraries';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={Colors.background}
          />
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default App;
