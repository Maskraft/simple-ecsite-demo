const summary = [
  { label: "商品小计", value: 8800 },
  { label: "运费", value: 0 },
  { label: "优惠", value: -300 },
];

const payments = ["微信支付", "支付宝", "信用卡", "银联云闪付"];

export default function CheckoutPage() {
  const total = summary.reduce((acc, item) => acc + item.value, 0);

  const formatPrice = (value: number) =>
    new Intl.NumberFormat("zh-CN", {
      style: "currency",
      currency: "CNY",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-12">
      <header className="space-y-3">
        <p className="text-sm text-zinc-500">结账流程示例</p>
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
          核对配送与支付信息
        </h1>
        <p className="text-zinc-600 dark:text-zinc-300">
          结合真实项目可拆分为多步流程，本演示将关键信息集中在同一页，便于查看字段。
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <form className="space-y-8 rounded-3xl border border-zinc-200 bg-white/80 p-8 dark:border-zinc-800 dark:bg-zinc-900/60">
          <section className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-zinc-500">
                收货信息
              </p>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                配送地址
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <label className="text-sm text-zinc-600">收货人</label>
                <input
                  type="text"
                  placeholder="姓名"
                  className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm focus:border-zinc-900 focus:outline-none dark:border-zinc-700 dark:bg-transparent"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-zinc-600">联系电话</label>
                <input
                  type="tel"
                  placeholder="138 **** 0000"
                  className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm focus:border-zinc-900 focus:outline-none dark:border-zinc-700 dark:bg-transparent"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-sm text-zinc-600">详细地址</label>
              <textarea
                rows={3}
                placeholder="省市区，街道，楼栋及门牌号"
                className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm focus:border-zinc-900 focus:outline-none dark:border-zinc-700 dark:bg-transparent"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm text-zinc-600">留言备注</label>
              <textarea
                rows={2}
                placeholder="例如：需上门安装，工作日送达等"
                className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm focus:border-zinc-900 focus:outline-none dark:border-zinc-700 dark:bg-transparent"
              />
            </div>
          </section>

          <section className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-zinc-500">
                支付设置
              </p>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                选择支付方式
              </h2>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {payments.map((method) => (
                <label
                  key={method}
                  className="flex items-center gap-3 rounded-2xl border border-zinc-200 px-4 py-3 text-sm text-zinc-700 transition hover:border-zinc-900 dark:border-zinc-700 dark:text-zinc-200"
                >
                  <input type="radio" name="payment" />
                  {method}
                </label>
              ))}
            </div>
            <div className="grid gap-2 md:grid-cols-2">
              <div className="grid gap-2">
                <label className="text-sm text-zinc-600">发票抬头</label>
                <input
                  type="text"
                  placeholder="公司 / 个人"
                  className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm focus:border-zinc-900 focus:outline-none dark:border-zinc-700 dark:bg-transparent"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-zinc-600">税号 / 身份证</label>
                <input
                  type="text"
                  placeholder="用于开票"
                  className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm focus:border-zinc-900 focus:outline-none dark:border-zinc-700 dark:bg-transparent"
                />
              </div>
            </div>
          </section>

          <button
            type="button"
            className="w-full rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900"
          >
            提交订单
          </button>
        </form>

        <aside className="h-fit rounded-3xl border border-zinc-200 bg-white/80 p-8 dark:border-zinc-800 dark:bg-zinc-900/70">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            订单摘要
          </h2>
          <div className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
            {summary.map((item) => (
              <div key={item.label} className="flex justify-between">
                <span>{item.label}</span>
                <span>
                  {item.value === 0 ? "—" : formatPrice(item.value)}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-zinc-200 pt-4 text-zinc-900 dark:border-zinc-800 dark:text-zinc-50">
            <span>应付总额</span>
            <span className="text-xl font-semibold">{formatPrice(total)}</span>
          </div>
          <p className="mt-4 text-xs text-zinc-500">
            下一步可集成支付网关（如 Stripe / 支付宝）或生成订单号存入数据库。
          </p>
        </aside>
      </div>
    </div>
  );
}

