export interface StatItem {
  id: number;
  value: string;
  label: string;
  subLabel?: string;
}

export const statsData: StatItem[] = [
  {
    id: 1,
    value: "7 Y+",
    label: "BUSINESS",
    subLabel: "DURATION",
  },
  {
    id: 2,
    value: "16 Y+",
    label: "OWNER EXPERIENCES",
    subLabel: "IN SOURCING",
  },
  {
    id: 3,
    value: "18+",
    label: "EXPORT TO",
    subLabel: "COUNTRIES",
  },
  {
    id: 4,
    value: "100+",
    label: "MANUFACTURING",
    subLabel: "FACTORIES",
  },
  {
    id: 5,
    value: "600K+",
    label: "DAILY PRODUCTION",
    subLabel: "CAPACITY",
  },
];