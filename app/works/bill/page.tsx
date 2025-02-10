import { type Metadata } from "next";
import { pageProperties } from "./properties";
import { siteTitle } from "@/app/_shared/const";

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
        </article>
    );
};

export default Bill;
