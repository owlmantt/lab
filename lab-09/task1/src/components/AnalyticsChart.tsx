import { useMemo } from "react";
interface AnalyticsChartProps {
    items: string[];
}
function calculateAnalytics(items: string[]): number {
    console.time("Calculation Time");
    console.log("Calculating expensive analytics...");
    let result = 0;
    for (let i = 0; i < 1e7; i++) {
        result += Math.sqrt(i);
    }
    console.timeEnd("Calculation Time");
    return result + items.length;
}

export function AnalyticsChart({ items }: AnalyticsChartProps) {
  const analytics = useMemo(() => calculateAnalytics(items), [items]);

  console.log("AnalyticsChart render");

  return (
    <div style={{ background: '#f0f0f0', padding: '10px' }}>
      <h4>Analytics</h4>
      <p>Calculated value: {analytics.toFixed(2)}</p>
      <p>Items count: {items.length}</p>
    </div>
  );
}