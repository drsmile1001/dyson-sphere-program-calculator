export interface Recipe {
  name: string;
  type: "冶煉" | "製造";
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
    name: "矽石",
    type: "冶煉",
    inputs: [{ resource: "石礦", amount: 10 }],
    outputs: [{ resource: "矽石", amount: 1 }],
    processTimes: 10,
  },
  {
    name: "鐵塊",
    type: "冶煉",
    inputs: [{ resource: "鐵礦", amount: 1 }],
    outputs: [{ resource: "鐵塊", amount: 1 }],
    processTimes: 1,
  },
  {
    name: "銅塊",
    type: "冶煉",
    inputs: [{ resource: "銅礦", amount: 1 }],
    outputs: [{ resource: "銅塊", amount: 1 }],
    processTimes: 1,
  },
  {
    name: "石材",
    type: "冶煉",
    inputs: [{ resource: "石礦", amount: 1 }],
    outputs: [{ resource: "石材", amount: 1 }],
    processTimes: 1,
  },
  {
    name: "高能石墨1",
    type: "冶煉",
    inputs: [{ resource: "煤礦", amount: 2 }],
    outputs: [{ resource: "高能石墨", amount: 1 }],
    processTimes: 2,
  },
  {
    name: "高純矽塊",
    type: "冶煉",
    inputs: [{ resource: "矽石", amount: 2 }],
    outputs: [{ resource: "高純矽塊", amount: 1 }],
    processTimes: 2,
  },
  {
    name: "鈦塊",
    type: "冶煉",
    inputs: [{ resource: "鈦石", amount: 2 }],
    outputs: [{ resource: "鈦塊", amount: 1 }],
    processTimes: 2,
  },
  {
    name: "磁鐵",
    type: "冶煉",
    inputs: [{ resource: "鐵礦", amount: 1 }],
    outputs: [{ resource: "磁鐵", amount: 1 }],
    processTimes: 1.5,
  },
  {
    name: "磁線圈",
    type: "製造",
    inputs: [
      { resource: "磁鐵", amount: 2 },
      { resource: "銅塊", amount: 1 },
    ],
    outputs: [{ resource: "磁線圈", amount: 2 }],
    processTimes: 1,
  },
  {
    name: "玻璃",
    type: "冶煉",
    inputs: [{ resource: "石礦", amount: 2 }],
    outputs: [{ resource: "玻璃", amount: 1 }],
    processTimes: 2,
  },
  {
    name: "金剛石1",
    type: "冶煉",
    inputs: [{ resource: "高能石墨", amount: 1 }],
    outputs: [{ resource: "金剛石", amount: 1 }],
    processTimes: 2,
  },
  {
    name: "晶格矽1",
    type: "冶煉",
    inputs: [{ resource: "高純矽塊", amount: 1 }],
    outputs: [{ resource: "晶格矽", amount: 1 }],
    processTimes: 2,
  },
  {
    name: "齒輪",
    type: "製造",
    inputs: [{ resource: "鐵塊", amount: 1 }],
    outputs: [{ resource: "齒輪", amount: 1 }],
    processTimes: 1,
  },
  {
    name: "電路板",
    type: "製造",
    inputs: [
      { resource: "鐵塊", amount: 2 },
      { resource: "銅塊", amount: 1 },
    ],
    outputs: [{ resource: "電路板", amount: 2 }],
    processTimes: 1,
  },

  {
    name: "電弧熔爐",
    type: "製造",
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
    name: "製造臺MK.I",
    type: "製造",
    inputs: [
      { resource: "鐵塊", amount: 4 },
      { resource: "齒輪", amount: 8 },
      { resource: "電路板", amount: 4 },
    ],
    outputs: [{ resource: "製造臺MK.I", amount: 1 }],
    processTimes: 2,
  },
];
