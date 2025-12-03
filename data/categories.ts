import type { Category } from "@/types/product";

export const categories: Category[] = [
  {
    id: "living-room",
    name: "客厅精选",
    description: "沙发、茶几、装饰画等空间主角，强调舒适与设计感。",
    highlight: "柔软织物、原木肌理、哑光金属组合。",
  },
  {
    id: "workspace",
    name: "办公灵感",
    description: "升降桌、人体工学椅与储物组合，构建高效家庭办公室。",
    highlight: "保持专注的中性色调与隐藏式走线系统。",
  },
  {
    id: "kitchen",
    name: "厨房餐厨",
    description: "电器、餐具与储物件协作，兼顾日常烹饪与待客需求。",
    highlight: "耐用陶瓷、可堆叠玻璃与可拆卸布艺。",
  },
  {
    id: "outdoor",
    name: "户外生活",
    description: "防水织物与便携家具打造阳台与露营的多场景体验。",
    highlight: "轻盈铝合金骨架配合可折叠结构。",
  },
];

export const categoryMap = Object.fromEntries(
  categories.map((category) => [category.id, category])
);

