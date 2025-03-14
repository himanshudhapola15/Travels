import React from "react";
import { qualityMetricData } from "./QualityMetricData";
import { QualityMetricCard } from "./QualityMetricCard";

function QualityMetric() {
  return (
    <div className="grid grid-cols-2 gap-3 space-y-10">
      {qualityMetricData.map((item) => (
        <QualityMetricCard item={item} key={item.key}/>
      ))}
    </div>
  );
}

export { QualityMetric };
