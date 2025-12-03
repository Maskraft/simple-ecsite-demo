# Simple EC Site Demo

**Next.js 16 (App Router)** と **TypeScript** を使用して構築された、簡易的なECサイト（E-commerce）のデモアプリケーションです。

モダンなフロントエンド技術スタックを用いて、商品一覧や詳細表示などの基本的なEC機能を実装しています。データはローカルのモックデータを使用しているため、バックエンドのセットアップなしで即座に動作確認が可能です。

## 🛠️ 技術スタック

主な使用技術は以下の通りです：

- **フレームワーク**: [Next.js](https://nextjs.org/) (App Router採用)
- **言語**: [TypeScript](https://www.typescriptlang.org/)
- **スタイリング**: [Tailwind CSS](https://tailwindcss.com/)
- **パッケージ管理**: [pnpm](https://pnpm.io/)
- **Linting**: ESLint

## ✨ 主な機能

* **商品一覧表示**: グリッドレイアウトによる商品カタログの表示。
* **商品詳細ページ**: 動的ルーティングを用いた個別商品ページ。
* **レスポンシブデザイン**: PC、タブレット、スマートフォンなどの各デバイスに対応。
* **モックデータ駆動**: `data/` ディレクトリ内のJSON/TSデータを使用し、外部APIに依存せず動作。
* **高速なページロード**: Next.jsのServer Componentsを活用した最適化。

## 📂 ディレクトリ構成

```bash
simple-ecsite-demo/
├── app/            # Next.js App Router ページおよびルーティング
├── components/     # 再利用可能なUIコンポーネント
├── data/           # デモ用の商品データ (Mock Data)
├── public/         # 静的アセット (画像、アイコン等)
├── types/          # TypeScript 型定義ファイル
└── ...
```

## 🚀 環境構築・実行方法

### 事前準備
ローカル環境に Node.js (v18以上推奨) がインストールされていることを確認してください。 本プロジェクトではパッケージマネージャーとして pnpm を推奨しています。

```bash
# pnpm未インストールの場合
npm install -g pnpm

# ローカル開発サーバーの起動
pnpm dev

# 本番ビルド
pnpm build

# 本番サーバー起動
pnpm start
```
