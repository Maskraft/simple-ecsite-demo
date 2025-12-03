export default function RegisterPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12">
      <header>
        <p className="text-sm text-zinc-500">注册后可同步购物车与订单</p>
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
          创建 Nordic Living 账户
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-300">
          目前暂不接入真实后端，表单提交仅展示交互，实际项目可对接自建 API 或
          Auth 平台。
        </p>
      </header>

      <form className="grid gap-6 rounded-3xl border border-zinc-200 bg-white/80 p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
        <div className="grid gap-2">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
            姓名
          </label>
          <input
            type="text"
            placeholder="例如：王语桐"
            className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm focus:border-zinc-900 focus:outline-none dark:border-zinc-700 dark:bg-transparent"
          />
        </div>
        <div className="grid gap-2 md:grid-cols-2">
          <div className="grid gap-2">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              邮箱
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm focus:border-zinc-900 focus:outline-none dark:border-zinc-700 dark:bg-transparent"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              手机号
            </label>
            <input
              type="tel"
              placeholder="+86 138 0000 0000"
              className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm focus:border-zinc-900 focus:outline-none dark:border-zinc-700 dark:bg-transparent"
            />
          </div>
        </div>
        <div className="grid gap-2 md:grid-cols-2">
          <div className="grid gap-2">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              设置密码
            </label>
            <input
              type="password"
              placeholder="至少 8 位，含字母与数字"
              className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm focus:border-zinc-900 focus:outline-none dark:border-zinc-700 dark:bg-transparent"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              确认密码
            </label>
            <input
              type="password"
              placeholder="再次输入密码"
              className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm focus:border-zinc-900 focus:outline-none dark:border-zinc-700 dark:bg-transparent"
            />
          </div>
        </div>
        <div className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-300">
          <input type="checkbox" className="mt-1" />
          <span>
            我同意《服务条款》与《隐私政策》，并愿意接收新品提醒。可在账户中心调整。
          </span>
        </div>
        <button
          type="button"
          className="rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900"
        >
          创建账户
        </button>
      </form>
    </div>
  );
}

