import Link from "next/link";
import { products } from "@/data/products";

const demoCart = [
  { productId: "sofa-nordic-cloud", quantity: 1 },
  { productId: "lamp-soothing-glow", quantity: 2 },
];

export default function CartPage() {
  const items = demoCart
    .map((cartItem) => {
      const product = products.find((p) => p.id === cartItem.productId);
      if (!product) return null;
      return { ...product, quantity: cartItem.quantity };
    })
    .filter(Boolean);

  const subtotal = items.reduce(
    (total, item) => total + item!.price * item!.quantity,
    0
  );
  const shippingFee = subtotal > 3000 ? 0 : 60;
  const total = subtotal + shippingFee;

  const formatPrice = (value: number) =>
    new Intl.NumberFormat("zh-CN", {
      style: "currency",
      currency: "CNY",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-12">
      <header>
        <p className="text-sm text-zinc-500">购物车（示例数据）</p>
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
          已选商品清单
        </h1>
      </header>

      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <section className="space-y-4 rounded-3xl border border-zinc-200 bg-white/80 p-6 dark:border-zinc-800 dark:bg-zinc-900/70">
          {items.map((item) => (
            <div
              key={item!.id}
              className="flex flex-col gap-4 rounded-2xl border border-zinc-100 p-4 dark:border-zinc-800 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex flex-1 flex-col gap-2">
                <p className="text-sm text-zinc-500 uppercase">
                  {item!.category}
                </p>
                <h2 className="text-lg font-semibold">{item!.name}</h2>
                <p className="text-sm text-zinc-500">
                  {item!.description.slice(0, 54)}...
                </p>
                <div className="text-xs text-zinc-400">
                  库存 {item!.stock} 件 · 预计 {item!.shippingDays}
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <p className="text-lg font-semibold">{formatPrice(item!.price)}</p>
                <p className="text-sm text-zinc-500">数量：{item!.quantity}</p>
                <button className="text-xs text-zinc-400 underline-offset-4 hover:underline">
                  移除
                </button>
              </div>
            </div>
          ))}
        </section>

        <aside className="h-fit rounded-3xl border border-zinc-200 bg-white/80 p-6 text-sm dark:border-zinc-800 dark:bg-zinc-900/70">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            结算信息
          </h2>
          <div className="mt-4 space-y-3">
            <div className="flex justify-between text-zinc-600">
              <span>商品小计</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-zinc-600">
              <span>运费</span>
              <span>{shippingFee === 0 ? "包邮" : formatPrice(shippingFee)}</span>
            </div>
            <div className="flex justify-between text-zinc-900 dark:text-zinc-50">
              <span>应付总额</span>
              <span className="text-lg font-semibold">{formatPrice(total)}</span>
            </div>
          </div>
          <p className="mt-4 text-xs text-zinc-500">
            示例项目未连接真实支付。可扩展为调用支付网关或店铺自建系统。
          </p>
          <Link
            href="/checkout"
            className="mt-6 block rounded-2xl bg-zinc-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900"
          >
            前往结账
          </Link>
        </aside>
      </div>
    </div>
  );
}

