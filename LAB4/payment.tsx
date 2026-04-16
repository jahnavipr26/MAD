import React from 'react';
import { View, Text, useColorScheme, StyleSheet } from 'react-native';

export default function App() {
  const colorScheme = useColorScheme(); 
  const isDark = colorScheme === 'light';

  return (
    <View style={[
      styles.container,
      { backgroundColor: isDark ? '#000' : '#fff' }
    ]}>
      <Text style={{ color: isDark ? '#fff' : '#000' }}>
        Hello Everyone !! Koushal here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
