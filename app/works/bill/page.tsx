import { type Metadata } from "next";
import { pageProperties } from "./properties";
import { siteTitle } from "@/app/_shared/const";
import CodeInline from "@/app/_components/code/codeInline";

export const metadata: Metadata = {
    title: `${pageProperties.name} - ${siteTitle}`,
};

const Bill = (): JSX.Element => {
    return (
        <article className="main-article">
            <h1>{pageProperties.name}</h1>
            <p>{pageProperties.description}</p>

            {/* ここにスクリーンショット */}

            <h2>Github</h2>
            <iframe
                title="matcher9131/Slide"
                src="https://hatenablog-parts.com/embed?url=https://github.com/matcher9131/initial-bill"
                className="w-full max-w-screen-sm"
            ></iframe>

            <h2>機能</h2>
            <ul>
                <li>あらかじめ指定されたデータを元に、簡単なUI操作で請求書の内容を作成できる</li>
                <li>入力ミスがある箇所の強調表示あり</li>
                <li>ワンクリックで印刷可能</li>
            </ul>

            <h2>動作推奨環境</h2>
            <p>Google Chrome 最新版</p>

            <h2>使用技術</h2>
            <table className="table table-lg max-w-[400px]">
                <thead>
                    <tr>
                        <th>種別</th>
                        <th>名称</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>プログラミング言語</td>
                        <td>TypeScript</td>
                    </tr>
                    <tr>
                        <td>フロントエンドライブラリ</td>
                        <td>React</td>
                    </tr>
                    <tr>
                        <td>状態管理ライブラリ</td>
                        <td>Recoil</td>
                    </tr>
                    <tr>
                        <td>CSSフレームワーク</td>
                        <td>Tailwind CSS</td>
                    </tr>
                    <tr>
                        <td>CSSフレームワーク</td>
                        <td>daisyUI</td>
                    </tr>
                    <tr>
                        <td>ビルドツール</td>
                        <td>Vite</td>
                    </tr>
                    <tr>
                        <td>リンター</td>
                        <td>ESLint</td>
                    </tr>
                    <tr>
                        <td>テストツール</td>
                        <td>Vitest</td>
                    </tr>
                    <tr>
                        <td>テストライブラリ</td>
                        <td>React Testing Library</td>
                    </tr>
                </tbody>
            </table>

            <h2>このアプリを作ったきっかけ</h2>
            <p>
                前の職場で月謝制で口座振替によりお客様から代金をいただいていたが、口座振替の申請が始まるまでの初回請求書をエクセルでほぼ手作業で作っていたため、時間がかかる上にヒューマンエラーもあった。
                これを解消するために会社に許可を得たうえで自作ツールで請求書を出力することにした。
            </p>

            <h2>使用技術の選定理由</h2>
            <p>検討したのは以下の3つ。</p>
            <ul>
                <li>クライアントアプリでPDFを作成する</li>
                <li>クライアントアプリでXAMLを作成する</li>
                <li>Webアプリ</li>
            </ul>
            <h3>クライアントアプリでPDFを作成する</h3>
            <p>
                PDF作成ライブラリはいろいろとあるが、基本的には普通の文書を書くためのものか、あるいは自由なレイアウトを実現できる代わりに
                何から何までこちらから指定しなければならないもののどちらかであることがほとんどである。
                <br />
                前者はテーブル主体のレイアウトに向かないし、後者は流石に労力が多すぎるので却下。
                <br />
                なおHTMLやMarkdownをPDFに変換するライブラリもあったが、HTMLをわざわざPDFに変換するくらいなら初めからWebアプリで良いと考えた。
            </p>
            <h3>クライアントアプリでXAMLを作成する</h3>
            <p>
                XAMLのレイアウトシステムのおかげでPDFのような地獄にはならなさそうだが、もともと印刷されることを想定したフォーマットではないためそのあたりがやや面倒である。
                （<CodeInline>FixedDocument</CodeInline>内の<CodeInline>PageContent</CodeInline>内の
                <CodeInline>FixedPage</CodeInline>内の<CodeInline>ContentPresenter</CodeInline>
                内に要素を入れる必要がある、など）
            </p>
            <h3>Webアプリ</h3>
            <p>
                新たに印刷用ページを作成しなくとも、メディアクエリを用いて通常時と印刷時で内容を変えるようにすれば良さげ。
                <br />
                デプロイすると商品内容が筒抜けになってしまう可能性がわずかながら存在するので、必要なときのみローカルサーバーを立てて使う運用にした。（どうせ自分しか使わないし…）
            </p>
        </article>
    );
};

export default Bill;
