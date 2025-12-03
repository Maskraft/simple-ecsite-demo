import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { categories } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";

export default function CategoriesPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12">
      <header className="flex flex-col gap-4">
        <p className="text-sm text-zinc-500">共 {categories.length} 个主题分类</p>
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
          依据生活场景划分的灵感索引
        </h1>
        <p className="text-zinc-600 dark:text-zinc-300">
          从客厅社交到户外露营，我们整理了适配不同空间的产品组合。每个分类都会给出素材搭配建议与服务亮点，便于一次性规划。
        </p>
      </header>
      <div className="grid gap-10">
        {categories.map((category) => {
          const products = getProductsByCategory(category.id);
          return (
            <section
              key={category.id}
              id={category.id}
              className="rounded-3xl border border-zinc-200 bg-white/70 p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-wide text-zinc-500">
                    {category.highlight}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">{category.name}</h2>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                    {category.description}
                  </p>
                </div>
                <Link
                  href={`/search?category=${category.id}`}
                  className="self-start rounded-full border border-zinc-300 px-4 py-2 text-sm text-zinc-600 transition hover:border-zinc-600 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-200"
                >
                  在分类内筛选
                </Link>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    size="compact"
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

