import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function ResponsiveHeader({ title }: { title: string }) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  return (
    <View style={[styles.header, { paddingTop: insets.top }]}>
      <View style={styles.headerContent}>
        <Text style={[styles.headerTitle, isTablet && styles.headerTitleTablet]}>{title}</Text>
      </View>
    </View>
  );
}

export function ResponsiveContainer({ children }: { children: React.ReactNode }) {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  return (
    <View style={styles.container}>
      {isTablet ? (
        <View style={styles.tabletContainer}>
          <View style={styles.sidebar}><Text>Menu</Text></View>
          <View style={{ flex: 1 }}>{children}</View>
        </View>
      ) : (
        <View style={{ flex: 1 }}>{children}</View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: { backgroundColor: '#0066cc' },
  headerContent: { height: 56, justifyContent: 'center', alignItems: 'center' },
  headerTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  headerTitleTablet: { fontSize: 24 },
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  tabletContainer: { flex: 1, flexDirection: 'row' },
  sidebar: { width: 200, backgroundColor: '#fff', borderRightWidth: 1, borderColor: '#ddd', paddingTop: 50, alignItems: 'center' },
});