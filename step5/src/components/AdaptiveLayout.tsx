import React from 'react';
import { View, Text, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';

export function AdaptiveLayout({ header, content, footer }: any) {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <View style={{ flex: 1 }}>
      {header}
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={[isLandscape && { flexDirection: 'row', flexWrap: 'wrap' }]}>
          {content}
        </View>
      </ScrollView>
      {footer}
    </View>
  );
}

export function FeatureCard({ icon, title, description }: any) {
  return (
    <View style={styles.featureCard}>
      <Text style={{ fontSize: 30 }}>{icon}</Text>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={{ textAlign: 'center', color: '#666' }}>{description}</Text>
    </View>
  );
}

export function StatsRow({ stats }: any) {
  return (
    <View style={styles.statsRow}>
      {stats.map((s: any, i: number) => (
        <View key={i} style={{ alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{s.value}</Text>
          <Text style={{ color: '#888' }}>{s.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  featureCard: { backgroundColor: '#fff', padding: 20, borderRadius: 15, margin: 10, alignItems: 'center', elevation: 2 },
  featureTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 5 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-around', padding: 20, backgroundColor: '#fff', margin: 10, borderRadius: 10 },
});