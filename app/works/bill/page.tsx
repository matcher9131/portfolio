import { type Metadata } from "next";
import { pageProperties } from "./properties";
import CodeInline from "@/app/_components/code/codeInline";
import { siteTitle } from "@/app/_shared/const";

export const metadata: Metadata = {
    title: `${pageProperties.name} - ${siteTitle}`,
};

const Bill = (): JSX.Element => {
    return (
        <article className="main-article">
            <h1>{pageProperties.name}</h1>
            <p>{pageProperties.description}</p>

            <h2>スクリーンショット</h2>
            <div className="w-2/3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    alt="スクリーンショット"
                    src="/works/bill/screenshot.png"
                    srcSet="/works/bill/screenshot-480.png 480w, /works/bill/screenshot.png 1280w"
                />
            </div>

            <h2>Github</h2>
            <iframe
                title="matcher9131/Slide"
                src="https://hatenablog-parts.com/embed?url=https://github.com/matcher9131/initial-bill"
                className="w-full max-w-screen-sm"
            ></iframe>

            <h2>デプロイ例</h2>
            <iframe
                title="Initial Bill"
                src="https://hatenablog-parts.com/embed?url=https://initial-bill-sample-x8jd7w09.web.app/"
                className="w-full max-w-screen-sm"
            ></iframe>
            <p>
                <strong>※メールアドレス「bill@example.com」、パスワード「initial」でログインしてください。</strong>
            </p>

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
                これを解消するために会社に許可を得たうえで自作アプリで請求書を出力することにした。
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
                セキュリティ面を考慮し、ログイン機能を実装したうえで使うときのみローカルサーバーを立てて運用することにした。
            </p>

            <h2>開発時に苦労した点・工夫した点</h2>
            <h3>入力された日付の取り扱い</h3>
            <p>日付に関して、以下の2点をアプリの仕様とした。</p>
            <ul>
                <li>
                    入力には<CodeInline>{'<input type="date">'}</CodeInline>を用いる。
                </li>
                <li>存在しない日付が入力されている場合は、矯正せずにエラー表示をする。</li>
            </ul>
            <p>
                <CodeInline>{'<input type="date">'}</CodeInline>
                はカレンダーによる日付入力もできるため日付選択のフォームとしては有能だが、
                直接入力の際は「月」に入力された数値が1以上12以下に、「日」に入力された数値が1以上31以下に矯正される程度の機能しか持たない。
                すなわち、<CodeInline>2025/01/32</CodeInline>や<CodeInline>2025/13/01</CodeInline>
                のような入力はできないが、<CodeInline>2025/04/31</CodeInline>や<CodeInline>2025/02/29</CodeInline>
                のような入力はそのまま通ってしまう。 <br />
                ただし<CodeInline>change</CodeInline>
                イベントの際に入力が存在しない日付になる場合は<CodeInline>value</CodeInline>として
                空文字列が返されるため、そこでエラー表示をするかどうかの判断をすることができる。
            </p>

            <h3>ページ遷移や待ち時間なしで印刷画面へ</h3>
            <p>
                アプリ本体の画面を印刷する必要はないため、1ページ内にアプリ本体と請求書部分の双方を仕込んでおき、通常時はアプリ本体のみ表示、印刷時は請求書部分のみ表示させることで待ち時間無しで印刷画面へ移行できるようにした。
            </p>

            <h3>ページネーション</h3>
            <p>
                もちろんブラウザ側がページレイアウトをしてくれるのだが、そのままだと中途半端なところで改ページされる可能性があるし、そもそも請求書なら続きがあることを明示したほうがよいため、請求書の行数が一定値を超える場合に改ページを行うことにした。
                <br />
                商品数から言えば3ページ以上になることはまず無いのだが、念の為「単体ページ」「先頭ページ」「中間ページ」「最終ページ」の4つのフォーマットを使い分ける形にしている。
            </p>

            <h3>ログイン</h3>
            <p>
                デプロイ先をFirebaseとし、Firebaseの認証機能を用いてログイン機能を実装した。
                <br />
                使い方からしてGoogleアカウントなどでログインできる必要はないと判断し、指定したメールアドレスとパスワードのみを許可するようにした。
            </p>
        </article>
    );
};

export default Bill;
