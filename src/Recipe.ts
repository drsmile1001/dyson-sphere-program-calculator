export interface Recipe {
  name: string;
  inputs: {
    resource: string;
    amount: number;
  }[];
  outputs: {
    resource: string;
    amount: number;
  }[];
  processTimes: number;
}

export const recipes: Recipe[] = [
  {
    name: "鐵塊（冶煉）",
    inputs: [{ resource: "鐵礦", amount: 1 }],
    outputs: [{ resource: "鐵塊", amount: 1 }],
    processTimes: 1,
  },
  {
    name: "銅塊（冶煉）",
    inputs: [{ resource: "銅礦", amount: 1 }],
    outputs: [{ resource: "銅塊", amount: 1 }],
    processTimes: 1,
  },
  {
    name: "磁鐵（冶煉）",
    inputs: [{ resource: "鐵礦", amount: 1 }],
    outputs: [{ resource: "磁鐵", amount: 1 }],
    processTimes: 1.5,
  },
  {
    name: "石材（冶煉）",
    inputs: [{ resource: "石礦", amount: 1 }],
    outputs: [{ resource: "石材", amount: 1 }],
    processTimes: 1,
  },
  {
    name: "齒輪（製造）",
    inputs: [{ resource: "鐵塊", amount: 1 }],
    outputs: [{ resource: "齒輪", amount: 1 }],
    processTimes: 1,
  },
  {
    name: "電路板（製造）",
    inputs: [
      { resource: "鐵塊", amount: 2 },
      { resource: "銅塊", amount: 1 },
    ],
    outputs: [{ resource: "電路板", amount: 2 }],
    processTimes: 1,
  },
  {
    name: "磁線圈（製造）",
    inputs: [
      { resource: "磁鐵", amount: 2 },
      { resource: "銅塊", amount: 1 },
    ],
    outputs: [{ resource: "磁線圈", amount: 2 }],
    processTimes: 1,
  },
  {
    name: "電弧熔爐（製造）",
    inputs: [
      { resource: "鐵塊", amount: 4 },
      { resource: "石材", amount: 2 },
      { resource: "電路板", amount: 4 },
      { resource: "磁線圈", amount: 2 },
    ],
    outputs: [{ resource: "電弧熔爐", amount: 1 }],
    processTimes: 3,
  },
  {
    name: "製造臺MK.I（製造）",
    inputs: [
      { resource: "鐵塊", amount: 4 },
      { resource: "齒輪", amount: 8 },
      { resource: "電路板", amount: 4 },
    ],
    outputs: [{ resource: "製造臺MK.I", amount: 1 }],
    processTimes: 2,
  },
];
