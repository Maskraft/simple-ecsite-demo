export default function LoginPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-12">
      <header className="space-y-3">
        <p className="text-sm text-zinc-500">欢迎回到 Nordic Living</p>
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
          登录账户
        </h1>
        <p className="text-zinc-600 dark:text-zinc-300">
          当前示例仅做界面展示，可在后续接入真实认证逻辑。
        </p>
      </header>

      <form className="grid gap-6 rounded-3xl border border-zinc-200 bg-white/80 p-8 dark:border-zinc-800 dark:bg-zinc-900/60">
        <div className="grid gap-2">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
            邮箱或手机
          </label>
          <input
            type="text"
            placeholder="name@example.com / 138****0000"
            className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm focus:border-zinc-900 focus:outline-none dark:border-zinc-700 dark:bg-transparent"
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
            密码
          </label>
          <input
            type="password"
            placeholder="请输入密码"
            className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm focus:border-zinc-900 focus:outline-none dark:border-zinc-700 dark:bg-transparent"
          />
          <button
            type="button"
            className="self-end text-sm text-zinc-500 underline-offset-4 hover:underline"
          >
            忘记密码？
          </button>
        </div>
        <button
          type="button"
          className="rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900"
        >
          登录
        </button>
        <div className="flex items-center gap-4 text-xs uppercase tracking-wide text-zinc-400">
          <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
          或使用其他方式
          <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <button
            type="button"
            className="rounded-2xl border border-zinc-300 px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-600 dark:border-zinc-700 dark:text-zinc-200"
          >
            微信扫码
          </button>
          <button
            type="button"
            className="rounded-2xl border border-zinc-300 px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-600 dark:border-zinc-700 dark:text-zinc-200"
          >
            Apple 登录
          </button>
        </div>
      </form>
    </div>
  );
}

