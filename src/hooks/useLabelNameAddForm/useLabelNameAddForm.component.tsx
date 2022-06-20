import { useEffect, useState } from "react";

export const useLabelNameAddForm = (label: string) => {
  const [formattedLabel, setFormattedLabel] = useState(label);

  useEffect(() => {
    switch (label.toLowerCase()) {
      case "time":
        setFormattedLabel("Time ( minutes ) ");
        break;
      case "distance":
        setFormattedLabel("Distance ( meters ) ");
        break;
      case "cal":
        setFormattedLabel("Calories");
        break;
      default:
        setFormattedLabel(label);
    }
  }, [label]);
  return formattedLabel;
};
