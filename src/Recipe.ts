export interface Recipe {
  name: string;
  type: "冶煉" | "製造" | "科研" | "化工" | "粒子對撞";
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
    name: "硫酸",
    type: "化工",
    inputs: [
      { resource: "精煉油", amount: 6 },
      { resource: "石礦", amount: 8 },
      { resource: "水", amount: 4 },
    ],
    outputs: [{ resource: "硫酸", amount: 4 }],
    processTimes: 6,
  },
  {
    name: "精煉油",
    type: "化工",
    inputs: [{ resource: "原油", amount: 2 }],
    outputs: [
      { resource: "精煉油", amount: 2 },
      { resource: "氫", amount: 1 },
    ],
    processTimes: 4,
  },
  {
    name: "液氫燃料棒",
    type: "製造",
    inputs: [
      { resource: "鈦塊", amount: 1 },
      { resource: "氫", amount: 5 },
    ],
    outputs: [{ resource: "液氫燃料棒", amount: 2 }],
    processTimes: 6,
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
    name: "鈦合金",
    type: "冶煉",
    inputs: [
      { resource: "鈦塊", amount: 4 },
      { resource: "鋼材", amount: 4 },
      { resource: "硫酸", amount: 8 },
    ],
    outputs: [{ resource: "鈦合金", amount: 4 }],
    processTimes: 12,
  },
  {
    name: "塑料",
    type: "化工",
    inputs: [
      { resource: "精煉油", amount: 2 },
      { resource: "高能石墨", amount: 1 },
    ],
    outputs: [{ resource: "塑料", amount: 1 }],
    processTimes: 3,
  },
  {
    name: "有機晶體1",
    type: "化工",
    inputs: [
      { resource: "塑料", amount: 2 },
      { resource: "精煉油", amount: 1 },
      { resource: "水", amount: 1 },
    ],
    outputs: [{ resource: "有機晶體", amount: 1 }],
    processTimes: 6,
  },
  {
    name: "石墨烯1",
    type: "化工",
    inputs: [
      { resource: "高能石墨", amount: 3 },
      { resource: "硫酸", amount: 1 },
    ],
    outputs: [{ resource: "石墨烯", amount: 2 }],
    processTimes: 3,
  },
  {
    name: "鋼材",
    type: "冶煉",
    inputs: [{ resource: "鐵塊", amount: 3 }],
    outputs: [{ resource: "鋼材", amount: 1 }],
    processTimes: 3,
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
    name: "稜鏡",
    type: "製造",
    inputs: [{ resource: "玻璃", amount: 3 }],
    outputs: [{ resource: "稜鏡", amount: 2 }],
    processTimes: 2,
  },
  {
    name: "馬達",
    type: "製造",
    inputs: [
      { resource: "鐵礦", amount: 2 },
      { resource: "齒輪", amount: 1 },
      { resource: "磁線圈", amount: 1 },
    ],
    outputs: [{ resource: "馬達", amount: 1 }],
    processTimes: 2,
  },
  {
    name: "微晶元件",
    type: "製造",
    inputs: [
      { resource: "高純矽塊", amount: 2 },
      { resource: "銅塊", amount: 1 },
    ],
    outputs: [{ resource: "微晶元件", amount: 1 }],
    processTimes: 2,
  },
  {
    name: "鈦晶石",
    type: "製造",
    inputs: [
      { resource: "有機晶體", amount: 1 },
      { resource: "鈦塊", amount: 3 },
    ],
    outputs: [{ resource: "鈦晶石", amount: 1 }],
    processTimes: 4,
  },
  {
    name: "齒輪",
    type: "製造",
    inputs: [{ resource: "鐵塊", amount: 1 }],
    outputs: [{ resource: "齒輪", amount: 1 }],
    processTimes: 1,
  },
  {
    name: "電漿激發器",
    type: "製造",
    inputs: [
      { resource: "磁線圈", amount: 4 },
      { resource: "稜鏡", amount: 2 },
    ],
    outputs: [{ resource: "電漿激發器", amount: 2 }],
    processTimes: 2,
  },
  {
    name: "光子合併器1",
    type: "製造",
    inputs: [
      { resource: "稜鏡", amount: 2 },
      { resource: "電路板", amount: 1 },
    ],
    outputs: [{ resource: "光子合併器", amount: 2 }],
    processTimes: 3,
  },
  {
    name: "電磁渦輪",
    type: "製造",
    inputs: [
      { resource: "馬達", amount: 2 },
      { resource: "磁線圈", amount: 2 },
    ],
    outputs: [{ resource: "電磁渦輪", amount: 1 }],
    processTimes: 2,
  },
  {
    name: "處理器",
    type: "製造",
    inputs: [
      { resource: "電路板", amount: 2 },
      { resource: "微晶元件", amount: 2 },
    ],
    outputs: [{ resource: "處理器", amount: 1 }],
    processTimes: 3,
  },
  {
    name: "地基",
    type: "製造",
    inputs: [
      { resource: "石材", amount: 3 },
      { resource: "鋼材", amount: 1 },
    ],
    outputs: [{ resource: "地基", amount: 1 }],
    processTimes: 1,
  },
  {
    name: "粒子容器1",
    type: "製造",
    inputs: [
      { resource: "電磁渦輪", amount: 2 },
      { resource: "銅塊", amount: 2 },
      { resource: "石墨烯", amount: 2 },
    ],
    outputs: [{ resource: "粒子容器", amount: 1 }],
    processTimes: 4,
  },
  {
    name: "超級磁場環",
    type: "製造",
    inputs: [
      { resource: "電磁渦輪", amount: 2 },
      { resource: "磁鐵", amount: 3 },
      { resource: "高能石墨", amount: 1 },
    ],
    outputs: [{ resource: "超級磁場環", amount: 1 }],
    processTimes: 3,
  },
  {
    name: "引力透鏡",
    type: "製造",
    inputs: [
      { resource: "金剛石", amount: 4 },
      { resource: "奇異物質", amount: 1 },
    ],
    outputs: [{ resource: "引力透鏡", amount: 1 }],
    processTimes: 6,
  },
  {
    name: "電磁矩陣",
    type: "科研",
    inputs: [
      { resource: "磁線圈", amount: 1 },
      { resource: "電路板", amount: 1 },
    ],
    outputs: [{ resource: "電磁矩陣", amount: 1 }],
    processTimes: 3,
  },
  {
    name: "能量矩陣",
    type: "科研",
    inputs: [
      { resource: "高能石墨", amount: 2 },
      { resource: "氫", amount: 2 },
    ],
    outputs: [{ resource: "能量矩陣", amount: 1 }],
    processTimes: 6,
  },
  {
    name: "結構矩陣",
    type: "科研",
    inputs: [
      { resource: "金剛石", amount: 1 },
      { resource: "鈦晶石", amount: 1 },
    ],
    outputs: [{ resource: "結構矩陣", amount: 1 }],
    processTimes: 8,
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
