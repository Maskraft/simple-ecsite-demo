import { ProductCard } from "@/components/ProductCard";
import { categories } from "@/data/categories";
import {
  products,
  searchProducts,
  getProductsByCategory,
} from "@/data/products";

interface SearchPageProps {
  searchParams: { q?: string; category?: string };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const keyword = searchParams.q ?? "";
  const selectedCategory = searchParams.category ?? "";

  const resultByKeyword = keyword ? searchProducts(keyword) : [];
  const resultByCategory = selectedCategory
    ? getProductsByCategory(selectedCategory)
    : [];

  const hasQuery = Boolean(keyword || selectedCategory);
  const finalResult = hasQuery
    ? resultByKeyword.length > 0
      ? resultByKeyword
      : resultByCategory
    : products;

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12">
      <header className="flex flex-col gap-3">
        <p className="text-sm text-zinc-500">即时检索 · 支持关键词 + 分类组合</p>
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
          商品搜索
        </h1>
        <p className="text-zinc-600 dark:text-zinc-300">
          输入产品名称、材质或使用场景，也可以直接选择分类过滤。
        </p>
      </header>

      <form className="grid gap-4 rounded-3xl border border-zinc-200 bg-white/70 p-6 dark:border-zinc-800 dark:bg-zinc-900/60 md:grid-cols-[2fr_1fr_auto]">
        <input
          type="text"
          name="q"
          placeholder="例如：模块沙发 / 人体工学椅 / 防水户外"
          defaultValue={keyword}
          className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-zinc-900 dark:border-zinc-700 dark:bg-transparent"
        />
        <select
          name="category"
          defaultValue={selectedCategory}
          className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm text-zinc-600 dark:border-zinc-700 dark:bg-transparent"
        >
          <option value="">全部分类</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900"
        >
          开始搜索
        </button>
      </form>

      {!hasQuery && (
        <p className="text-sm text-zinc-500">
          未输入任何条件时显示全部在售商品，便于快速浏览。
        </p>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {finalResult.length === 0 ? (
          <div className="col-span-2 rounded-3xl border border-dashed border-zinc-300 bg-white/60 p-12 text-center text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900/30">
            未找到匹配商品，可尝试更换关键词或筛选条件。
          </div>
        ) : (
          finalResult.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}

