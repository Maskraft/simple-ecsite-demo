import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { getProductById, products } from "@/data/products";

interface ProductDetailProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default function ProductDetailPage({ params }: ProductDetailProps) {
  const product = getProductById(params.id);
  if (!product) {
    notFound();
  }

  const price = new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "CNY",
    maximumFractionDigits: 0,
  }).format(product.price);

  const related = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 2);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-12">
      <nav className="text-sm text-zinc-500">
        家居 /{" "}
        <span className="text-zinc-900 dark:text-zinc-50">{product.name}</span>
      </nav>

      <div className="grid gap-8 rounded-3xl border border-zinc-200 bg-white/80 p-8 dark:border-zinc-800 dark:bg-zinc-900/70 md:grid-cols-[1.1fr_0.9fr]">
        <div
          className="h-96 rounded-3xl"
          style={{ backgroundImage: product.thumbnail }}
        >
          <div className="flex h-full flex-col justify-between p-6 text-white">
            <div className="flex gap-2">
              {product.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/40 px-3 py-1 text-xs font-medium backdrop-blur"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div>
              <p className="text-sm text-white/70">库存 {product.stock} 件</p>
              <p className="text-sm text-white/80">
                评分 {product.rating.toFixed(1)} · {product.reviews} 条评价
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
              {product.name}
            </h1>
            <p className="text-zinc-500">{product.description}</p>
            <div className="flex gap-2 text-xs uppercase text-zinc-500">
              {product.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-zinc-50/80 p-6 dark:bg-zinc-800/60">
            <p className="text-sm text-zinc-500">售价</p>
            <p className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
              {price}
            </p>
            <p className="mt-2 text-sm text-zinc-500">含税价 · {product.shippingDays}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="flex-1 rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900">
              加入购物车
            </button>
            <button className="flex-1 rounded-2xl border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-600 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-200">
              一键下单
            </button>
          </div>
          <div className="rounded-2xl border border-dashed border-zinc-200 p-4 text-sm text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
            <p>售后权益：</p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>365 天质保，可预约上门维护</li>
              <li>支持旧家具回收与拆装</li>
              <li>24 小时内可申请无理由取消</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="rounded-3xl border border-zinc-200 bg-white/80 p-8 dark:border-zinc-800 dark:bg-zinc-900/70">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          关键设计亮点
        </h2>
        <ul className="mt-4 grid gap-3 text-sm text-zinc-600 dark:text-zinc-300 md:grid-cols-2">
          {product.features.map((feature) => (
            <li
              key={feature}
              className="rounded-2xl border border-zinc-100 bg-zinc-50/80 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-800/50"
            >
              {feature}
            </li>
          ))}
        </ul>
      </section>

      {related.length > 0 && (
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              同分类推荐
            </h2>
            <span className="text-sm text-zinc-500">同类热度较高的产品</span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

