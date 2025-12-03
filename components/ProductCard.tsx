import Link from "next/link";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  size?: "default" | "compact";
  hrefPrefix?: string;
}

export function ProductCard({
  product,
  size = "default",
  hrefPrefix = "/products",
}: ProductCardProps) {
  const price = new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "CNY",
    maximumFractionDigits: 0,
  }).format(product.price);

  const badgeColors =
    "rounded-full border border-white/40 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur";

  return (
    <Link
      href={`${hrefPrefix}/${product.id}`}
      className="group relative flex flex-col gap-3 rounded-2xl border border-zinc-200/70 bg-white/70 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-400/60 hover:shadow-lg dark:border-zinc-800/50 dark:bg-zinc-900/40"
    >
      <div
        className="h-44 w-full rounded-2xl"
        style={{
          backgroundImage: product.thumbnail,
        }}
      >
        <div className="flex h-full flex-col justify-between p-4">
          <div className="flex gap-2">
            {product.badges.map((badge) => (
              <span key={badge} className={badgeColors}>
                {badge}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between text-white">
            <span className="text-sm opacity-80">{product.tags.join(" / ")}</span>
            <span className="text-sm font-semibold">
              ⭐ {product.rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h3
          className={`text-zinc-900 transition group-hover:text-zinc-950 dark:text-zinc-50 ${
            size === "compact" ? "text-base" : "text-lg"
          }`}
        >
          {product.name}
        </h3>
        <p className="text-sm text-zinc-500 line-clamp-2 dark:text-zinc-400">
          {product.description}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          {price}
        </span>
        <span className="text-xs text-zinc-500">
          {product.reviews} 条评价
        </span>
      </div>
    </Link>
  );
}

