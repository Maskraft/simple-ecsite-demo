import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "sofa-nordic-cloud",
    name: "北欧云感模块沙发",
    category: "living-room",
    price: 5980,
    description:
      "高弹海绵与鹅绒填充带来沉浸式的包裹体验，模块化结构支持多户型灵活组合。",
    badges: ["新品", "免配送"],
    tags: ["织物", "可拆洗", "模块化"],
    stock: 24,
    rating: 4.9,
    reviews: 182,
    thumbnail: "linear-gradient(135deg,#fef3c7,#fde68a,#f97316)",
    features: [
      "双层高回弹坐垫支持长时间倚靠",
      "抽离式靠背便于清洁与更换套装",
      "实木内框架与金属支撑组合结构",
    ],
    shippingDays: "5-7 天物流配送",
  },
  {
    id: "chair-flow-desk",
    name: "流线人体工学椅",
    category: "workspace",
    price: 1980,
    description:
      "针对长时间办公的腰椎支撑设计，支持 8 向调节与透气网布。",
    badges: ["畅销"],
    tags: ["可调节", "腰托", "静音轮"],
    stock: 56,
    rating: 4.7,
    reviews: 314,
    thumbnail: "linear-gradient(135deg,#e0f2fe,#bae6fd,#38bdf8)",
    features: [
      "3D 臂托与头枕角度无级调节",
      "弹性网布背靠实现空气流通",
      "Class-4 气压棒，承重 130kg",
    ],
    shippingDays: "3-5 天快递",
  },
  {
    id: "lamp-soothing-glow",
    name: "柔雾氛围落地灯",
    category: "living-room",
    price: 860,
    description:
      "三段色温无极亮度调节，造型灵感来自黎明雾气，适合卧室与阅读角。",
    badges: ["热卖"],
    tags: ["调光", "遥控"],
    stock: 120,
    rating: 4.6,
    reviews: 97,
    thumbnail: "linear-gradient(135deg,#ede9fe,#ddd6fe,#a78bfa)",
    features: [
      "2700K-5000K 色温覆盖",
      "触控与遥控双模式",
      "底座隐藏配重设计更稳定",
    ],
    shippingDays: "2-4 天快递",
  },
  {
    id: "cookware-stone-pro",
    name: "岩釉多功能锅具组",
    category: "kitchen",
    price: 1260,
    description:
      "三层复合锅体兼顾快速导热与耐磨，附可替换蒸屉满足多菜同时烹饪。",
    badges: ["限时折扣"],
    tags: ["IH 适用", "不粘", "可入烤箱"],
    stock: 75,
    rating: 4.8,
    reviews: 211,
    thumbnail: "linear-gradient(135deg,#fee2e2,#fecaca,#f87171)",
    features: [
      "医用级不锈钢与铝芯夹层",
      "岩釉内壁提升抗刮性能",
      "附三款尺寸锅盖与蒸屉",
    ],
    shippingDays: "4-6 天物流配送",
  },
  {
    id: "desk-fold-lite",
    name: "折叠露营桌椅套装",
    category: "outdoor",
    price: 1490,
    description:
      "铝镁合金桌面支持快拆折叠，配合防水牛津布椅面，适合户外野营与阳台 BBQ。",
    badges: ["户外新品"],
    tags: ["轻量", "便携", "防水"],
    stock: 32,
    rating: 4.5,
    reviews: 54,
    thumbnail: "linear-gradient(135deg,#dcfce7,#bbf7d0,#22c55e)",
    features: [
      "桌面耐热 200℃ 可直接放锅",
      "椅面三角力学支撑结构",
      "附送束带与收纳袋",
    ],
    shippingDays: "5-8 天物流配送",
  },
  {
    id: "shelf-floating-oak",
    name: "浮影墙面收纳架",
    category: "workspace",
    price: 680,
    description:
      "隐藏式支架制造轻盈悬浮视觉，让小户型也能拥有陈列与收纳空间。",
    badges: ["设计款"],
    tags: ["原木", "承重 20kg"],
    stock: 88,
    rating: 4.4,
    reviews: 73,
    thumbnail: "linear-gradient(135deg,#fef9c3,#fef08a,#d97706)",
    features: [
      "胡桃木贴皮搭配环保板材",
      "激光切割支架增强稳定",
      "附安装模板与工具套件",
    ],
    shippingDays: "3-5 天快递",
  },
];

export const featuredProductIds = ["sofa-nordic-cloud", "chair-flow-desk", "lamp-soothing-glow"];

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(categoryId: string) {
  return products.filter((product) => product.category === categoryId);
}

export function searchProducts(keyword: string) {
  const normalized = keyword.trim().toLowerCase();
  if (!normalized) return [];
  return products.filter((product) => {
    return (
      product.name.toLowerCase().includes(normalized) ||
      product.description.toLowerCase().includes(normalized) ||
      product.tags.some((tag) => tag.toLowerCase().includes(normalized))
    );
  });
}

