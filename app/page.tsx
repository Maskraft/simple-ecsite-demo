import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { categories } from "@/data/categories";
import { featuredProductIds, products } from "@/data/products";

const featuredProducts = products.filter((product) =>
  featuredProductIds.includes(product.id)
);
const newArrivals = products.slice(0, 4);

export default function Home() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-12 lg:py-16">
      <section className="grid gap-10 rounded-3xl border border-zinc-200/80 bg-white/80 p-10 shadow-lg dark:border-zinc-800/80 dark:bg-zinc-900/80 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-500 dark:border-zinc-700 dark:text-zinc-300">
            2025 春季系列 · 家居灵感合集
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-zinc-900 dark:text-zinc-50">
            恰到好处的舒适与秩序，让家具融入日常节奏。
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            Nordic Living 为都市生活者策划多场景组合：从客厅社交区、远程办公角到户外阳台，精选可持续材质与模块化设计。
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/categories"
              className="rounded-full bg-zinc-900 px-6 py-3 text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900"
            >
              浏览全部分类
            </Link>
            <Link
              href="/search"
              className="rounded-full border border-zinc-300 px-6 py-3 text-zinc-700 transition hover:border-zinc-600 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500"
            >
              查找具体商品
            </Link>
          </div>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-600 p-8 text-white">
          <p className="text-sm uppercase tracking-widest text-white/70">
            每周主推 · Living Focus
          </p>
          <h2 className="mt-4 text-2xl font-semibold">
            模块沙发 + 氛围灯 + 收纳架
          </h2>
          <p className="mt-4 text-white/70">
            针对 86-110㎡ 户型搭配，三件套组合下单立减 ¥800，包含上门安装与旧家具回收服务。
          </p>
          <div className="mt-8 flex items-center gap-6 text-sm">
            <div>
              <p className="text-xs uppercase text-white/60">物流时效</p>
              <p className="font-semibold">上海地区 48 小时可达</p>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div>
              <p className="text-xs uppercase text-white/60">售后权益</p>
              <p className="font-semibold">365 天拆洗保修</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              热门分类
            </h2>
            <p className="text-sm text-zinc-500">
              依据浏览趋势与销量更新，帮助快速找到灵感。
            </p>
          </div>
          <Link href="/categories" className="text-sm text-zinc-600 hover:text-zinc-900">
            查看全部 →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories#${category.id}`}
              className="group flex flex-col gap-4 rounded-3xl border border-zinc-200 bg-white/70 p-6 transition hover:-translate-y-1 hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/70"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <span className="text-sm text-zinc-500 group-hover:text-zinc-700">
                  {category.highlight}
                </span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              本周主推
            </h2>
            <p className="text-sm text-zinc-500">主理人精挑严选的三款人气单品。</p>
          </div>
          <Link href="/products/sofa-nordic-cloud" className="text-sm text-zinc-600 hover:text-zinc-900">
            深入了解 →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              新品上架
            </h2>
            <p className="text-sm text-zinc-500">每周三 10:00 更新，库存有限。</p>
          </div>
          <Link href="/search?q=%E6%96%B0%E5%93%81" className="text-sm text-zinc-600 hover:text-zinc-900">
            快速筛选 →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl border border-zinc-200 bg-white/70 p-10 text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-50 md:grid-cols-3">
        <div>
          <p className="text-sm uppercase tracking-wide text-zinc-500">
            服务
          </p>
          <h3 className="mt-3 text-xl font-semibold">城市当日送装</h3>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            上海 / 北京核心城区下单后 6 小时完成配送与安装。
          </p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-wide text-zinc-500">
            回收
          </p>
          <h3 className="mt-3 text-xl font-semibold">旧家具环保回收</h3>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            免费上门拆除与回收，确保材料循环利用。
          </p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-wide text-zinc-500">
            会员
          </p>
          <h3 className="mt-3 text-xl font-semibold">N+ 会员计划</h3>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            消费即可累积积分，兑换限定色与设计师私享活动。
          </p>
        </div>
      </section>
    </div>
  );
}
