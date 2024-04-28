import { type Metadata } from "next";
import PropsDestructure from "./_code/propsDestructure";
import { pageProperties } from "./properties";
import { siteTitle } from "@/app/_shared/const";
import CodeInline from "@/app/components/code/codeInline";

export const metadata: Metadata = {
    title: `${pageProperties.name} - ${siteTitle}`,
};

const KanColleQuestManager = (): JSX.Element => {
    return (
        <article className="main-article">
            <h1>{pageProperties.name}</h1>
            <p>{pageProperties.description}</p>

            {/* ここにスクリーンショット */}

            <h2>リンク</h2>
            <iframe
                title="艦これ任務リストマネージャー"
                src="https://hatenablog-parts.com/embed?url=https://kc-quest.net/"
                className="w-full max-w-screen-sm"
            ></iframe>

            <h2>機能</h2>
            <ul>
                <li>任務達成状況を手動で切り替え、その状況をLocalStorageに自動的に保存する</li>
                <li>
                    ゲーム内では明かされない前提任務（ある任務を出現させるためにクリアする必要のある任務）や後続任務（ある任務をクリアすることで出現する新たな任務）を再帰的に検索可能
                </li>
                <li>非公式Wikiの内容をスクレイピングし、半自動的にデータを更新</li>
                <li>
                    その他の機能は
                    <a href="https://kc-quest.net/help" target="_blank">
                        艦これ任務リストマネージャー ヘルプ
                    </a>
                    を参照ください
                </li>
            </ul>

            <h2>動作推奨環境</h2>
            <ul>
                <li>端末：PC</li>
                <li>ブラウザ：Google Chrome、Microsoft Edge、Firefox 各最新版</li>
            </ul>

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
                「艦隊これくしょん
                -艦これ-」（以下、艦これと表記）は基本的にプレイヤーに情報をほとんど与えず、プレイヤー間の検証の積み重ねでようやくゲームシステムがわかるようなデザインがなされている。
                <br />
                これはクリアすることで様々なアイテムを入手できる「任務」も例外ではない。クリアするまで入手できるアイテムがわからないのは勿論のこと、そもそも任務は全てが無条件で受託可能なわけではなく、特定の任務をクリアしていないと受託できないものがほとんどであるにもかかわらず、当然それに関しても何の情報も与えられない。
                <br />
                ありがたいことに有志プレイヤーによって非公式Wikiにその辺の情報がまとめられるのだが、Wikiとにらめっこしても解消しない問題がさらに存在する。
                <br />
                それは「クリア済みの任務が表示されない」というUIデザインにより、クリアしてことで表示されていないのか、まだ出現条件を満たしていないため表示されていないのかが判断できないことである。
                <br />
                勿論手元でエクセルやスプレッドシートなどに記録すれば管理できるのだが、Wikiとにらめっこしながらになるのでウィンドウを行き来して二度手間感が半端ではない。
                <br />
                よって「任務」、「獲得できるアイテム」、「出現させるためにクリアする必要のある任務」の3つが同時に表示できて、かつ任務達成状況を保存できるWebアプリを自分で作ってしまえばよいのではないかと考えた。
            </p>

            <h2>使用技術の選定理由</h2>
            <h3>Webアプリかクライアントアプリか</h3>
            <ul>
                <li>任務は定期的に新しいものが追加されるため、定期的にアップデートする必要がある</li>
                <li>なるべく多くの端末で動かせるようにしたい</li>
            </ul>
            <p>以上の2点より、Webアプリを選択した。</p>

            <h3>情報の保存場所</h3>
            <p>
                サーバー側かフロントエンド側の2択だが、ログインの手間をかけてまでサーバー側に保存するべきものでもないと判断した。
                <br />
                個人を特定できる情報が含まれるわけではないので、Local
                Storageなら半永久的に保存できるので問題ない。と思っていたら…
                <br />
                <b>Safariは7日間アクセスがないと消える</b>…だと…？
            </p>
            <details className="leading-8">
                <summary className="text-sm">愚痴注意</summary>
                <p className="text-xs leading-6">
                    完全に余談になるが、AppleのLocal
                    Storageを制限するという方針は、「包丁は人に危害を及ぼす行為にも使われるので規制する」と主張するようなもので、はっきり言って愚策でしかないと考える。制限されるべきは個人を特定できる情報をLocal
                    Storageにホイホイ保存するような実装をする人間であって、Local
                    Storageの機能自体が制限されるべきではない。どうも昔からAppleはこの辺のピントがずれているというか…。そしてそんなことをやってる暇があるならCSSの対応状況をもっとまともにしたらどうなんだと
                </p>
            </details>
            <p>
                …話が逸れたが、これはもう調べても代替手段が無いようなので、Safariは動作保証対象外としてLocal
                Storageを使用することにした。
            </p>

            <h3>プログラミング言語</h3>
            <p>
                Local Storageを使うことで全てフロントエンド側で動作させられるので、JavaScriptまたはAlt
                JSを候補に検討する。
                <br />
                個人的にはJavaScript系である程度のものを作るときはTypeScript一択と考える。理由はいくつがあるが、
            </p>
            <ul>
                <li>
                    型システムが柔軟かつ強力
                    <ul>
                        <li>
                            あ、<CodeInline>any</CodeInline>は
                            <a
                                href="https://qiita.com/uhyo/items/aae57ba0734e36ee846a"
                                title="敗北者のTypeScript"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="link"
                            >
                                敗北者なのでお帰りください
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    変数に型を付けるためJavaScriptと比べてIntelliSenseが利きやすく、型付けの手間を考えても結果的に時短になる
                </li>
                <li>
                    typoに気づきやすい
                    <ul>
                        <li>
                            実行してからはじめて<CodeInline>TypeError: Cannot read properties of undefined</CodeInline>
                            やら<CodeInline>TypeError: foo is not a function</CodeInline>やら言われても面倒くさい
                        </li>
                    </ul>
                </li>
                <li>
                    型がドキュメントになるのでコードそのものが説明になる
                    <ul>
                        <li>数日間触っていないファイルでもIDEの助けを借りれば把握しやすい</li>
                    </ul>
                </li>

                <li>ユーザーが多いため情報が豊富 && 新しい</li>
                <li>私自身が静的型付け言語をベースとした思考回路を持っているので動的型付けは落ち着かない</li>
            </ul>
            <p>といった具合である。</p>

            <h3>フロントエンドライブラリ</h3>
            <p>最終的に最も慣れ親しんでいるReactを採用したが、以下も検討した。</p>
            <h4>Vue 3</h4>
            <p>
                経験はあるしライブラリの選定にあまり時間をかけなくてよいメリットはあるが、<CodeInline>ref</CodeInline>や
                <CodeInline>reactive</CodeInline>周りが煩わしいので（<CodeInline>.value</CodeInline>
                があったりなかったり）却下。
            </p>

            <h4>SolidJS</h4>
            <p>
                Reactに書き味が似ていてさらにHooksのルールが無く、かつ軽量な動作ということでかなり魅力的ではあるが、使った経験が無いうえに分割代入に難があるので今回は見送り。
            </p>
            <PropsDestructure />
            <p>
                って書きたいんや…。
                <br />
                ※ライブラリを使えばアロー関数式の本体ブロック内で分割代入ができるようだが、引数での分割はやはり無理そう。
            </p>

            <h4>状態管理ライブラリ</h4>
            <ul>
                <li>
                    Recoil
                    <ul>
                        <li>
                            シンプルであり（Reduxと比べて）書き方が強制されない
                            <ul>
                                <li>
                                    これに関してはデメリットでもあるので、以下のページを参考にして書き方を統一している
                                    <br />
                                    <a
                                        href="https://zenn.dev/warabi/articles/2521222d57a71f"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="link"
                                    >
                                        秩序あるRecoilの使い方を考える
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <CodeInline>Atom</CodeInline>や<CodeInline>Selector</CodeInline>
                            で同期・非同期の差を吸収させられる
                            <ul>
                                <li>
                                    Reactの<CodeInline>Suspense</CodeInline>との親和性が高い
                                </li>
                            </ul>
                        </li>
                        <li>
                            まだメジャーバージョンが0番台のまま
                            <ul>
                                <li>これに関しては何度か使用して特に大きな問題は見られないため良しとした</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    Redux
                    <ul>
                        <li>NOT IMPLEMENTED</li>
                    </ul>
                </li>
                <li>
                    Jotai
                    <ul>
                        <li>NOT IMPLEMENTED</li>
                    </ul>
                </li>
            </ul>
        </article>
    );
};

export default KanColleQuestManager;
