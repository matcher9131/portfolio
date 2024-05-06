import { type Metadata } from "next";
import AtomMock from "./_code/atomMock";
import AtomMockUsage from "./_code/atomMockUsage";
import ColumnHeader from "./_code/columnHeader";
import LazySearch from "./_code/lazySearch";
import PropsDestructure from "./_code/propsDestructure";
import { pageProperties } from "./properties";
import CodeInline from "@/app/_components/code/codeInline";
import ExternalLink from "@/app/_components/externalLink";
import { siteTitle } from "@/app/_shared/const";

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
                    <ExternalLink href="https://kc-quest.net/help">艦これ任務リストマネージャー ヘルプ</ExternalLink>
                    を参照ください
                </li>
            </ul>

            <h2>動作推奨環境</h2>
            <ul>
                <li>端末：PC、スマホ</li>
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
                    Storageの機能自体が制限されるべきではない。どうも昔からAppleはこの辺のピントがずれているというか…。そしてそんなことをやっている暇があるならCSSの対応状況をもっとマシにしたらどうなんだと
                </p>
            </details>
            <p>
                …話が逸れたが、これは調べてももう代替手段が無いようなので、Safariは動作保証対象外としてLocal
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
                            ユニオンタイプの使い勝手が良さと堅牢さが素晴らしすぎて、早くC#にも来ないかなと思ってしまうほど
                        </li>
                        <li>
                            あ、<CodeInline>any</CodeInline>は
                            <ExternalLink
                                href="https://qiita.com/uhyo/items/aae57ba0734e36ee846a"
                                title="敗北者のTypeScript"
                            >
                                敗北者なのでお帰りください
                            </ExternalLink>
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
                            やら<CodeInline>TypeError: foo is not a function</CodeInline>
                            やら言われるよりIDEがエラーを示してくれたほうが遥かに手っ取り早い
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
                <CodeInline>reactive</CodeInline>周りが直感的でなく煩わしい（<CodeInline>.value</CodeInline>
                があったりなかったり）ので却下。
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

            <h3>状態管理ライブラリ</h3>
            <ul>
                <li>
                    ライブラリを使わない
                    <ul>
                        <li>
                            <CodeInline>props</CodeInline>バケツリレー
                            <ul>
                                <li>
                                    <span className="line-through">流石に面倒くさすぎる</span>
                                </li>
                                <li>Presentationのためのpropsと状態管理のためのpropsが混ざるのは保守面でも良くない</li>
                            </ul>
                        </li>
                        <li>
                            <CodeInline>useContext</CodeInline>
                            <ul>
                                <li>
                                    <ExternalLink href="https://zenn.dev/kazuma1989/articles/68c2339e056530">
                                        ぼくのかんがえたさいきょうの useState + useContext よりも Redux
                                        のほうが大抵勝っている
                                    </ExternalLink>
                                    を読んで、これもないと判断
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    Redux
                    <ul>
                        <li>
                            昔からあるメジャーな状態管理ライブラリ
                            <ul>
                                <li>古くからあるためいわゆる「枯れた技術」</li>
                            </ul>
                        </li>
                        <li>お決まりの作法があり、書き方がブレない</li>
                        <li>
                            ただしそのお決まりの作法のせいで簡単な状態操作を書くだけでもシンプルにできない
                            <ul>
                                <li>
                                    Action毎に<CodeInline>type</CodeInline>を割り振って引数などを
                                    <CodeInline>payload</CodeInline>に設定し
                                </li>
                                <li>
                                    ReducerではActionの<CodeInline>type</CodeInline>を<CodeInline>switch文</CodeInline>
                                    などで分岐させて状態操作の実装を書き
                                </li>
                                <li>
                                    そしてコンポーネントでActionを作って<CodeInline>dispatch</CodeInline>する
                                </li>
                            </ul>
                        </li>
                        <li>一度使ったことはあるが、ボイラープレート感が半端ではなかったため却下</li>
                    </ul>
                </li>
                <li>
                    Recoil
                    <ul>
                        <li>
                            シンプルであり（Reduxと比べて）書き方が強制されない
                            <ul>
                                <li>
                                    これに関してはデメリットでもあるので、以下のページを参考にして書き方を統一している
                                    <br />
                                    <ExternalLink href="https://zenn.dev/warabi/articles/2521222d57a71f">
                                        秩序あるRecoilの使い方を考える
                                    </ExternalLink>
                                    <br />
                                    （少々ボイラープレート感はあるがReduxよりはマシということで）
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
                                <li>これに関しては何度か使用した経験から特に大きな問題は見られないため良しとした</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    Jotai
                    <ul>
                        <li>
                            Recoilよりもシンプルに書ける
                            <ul>
                                <li>一方で込み入ったことをしようとするとシンプルではなくなる？</li>
                            </ul>
                        </li>
                        <li>Recoilに比べてはっきり優位な点が見出せなかったので今回は見送り</li>
                    </ul>
                </li>
            </ul>

            <h3>ビルドツール</h3>
            <p>
                Viteを使い出してからSPAはこれ一択になってしまった…。とにかく速い！そして設定が比較的わかりやすい！
                <br />
                （設定に関してはViteがわかりやすいというよりはWebpackがクソわかりにくいだけとも言える）
            </p>

            <h2>開発時に苦労した点・工夫した点</h2>
            <h3>検索性</h3>
            <p>本アプリのコンセプト的に、以下に対する検索機能を付けたい。</p>
            <ul>
                <li>任務名称</li>
                <li>任務達成でもらえるアイテム</li>
                <li>
                    前提任務（その任務を出現させるためにクリアすべき任務）や後続任務（その任務をクリアすることが出現のフラグになっている任務）
                </li>
            </ul>
            <p>
                任務名称と任務達成でもらえるアイテムの検索はテキストによるものなので、テキストボックスは必要。あとは前提任務・後続任務をどうするかだが、これもテキストボックスを使うこととした。
                <br />
                具体的にはプレフィクスを設け、それに続けて任務IDを入力することで対応した。例えば「p:A100」なら任務IDがA100の任務の前提任務をすべて表示する、といった具合である。
                ただしプレフィクスを覚えて入力することを強制するのはユーザビリティが良くないので、各任務にボタンを割り当て、押せば自動的にテキストボックスに「p:A100」などと入力されるようにした。
                <br />
                これにより検索機能がすべてテキストボックスに集約されたので、Model側のロジックがすっきりできて良し。
            </p>

            <h3>前提任務・後続任務</h3>
            <p>
                先ほどから何度も話題に上がっている前提任務だが、2種類の検索を用意した。文字通り出現のフラグになっている任務を表示する「p:」プレフィクスと、その任務を出現させるためにクリアするべき全ての任務を表示する「a:」プレフィクスである。
                <br />
                後者に関してはデータを保持しているわけではなく、任務群を有向グラフと見立ててDFS（深さ優先探索）で探索をしている。DFSは再帰呼び出しで実装することが多いが、RecoilのSelectorで探索部を実装しておりSelectorの再帰呼び出しのオーバーヘッドがどれくらいのものかわからなかったので、
                <CodeInline>Array</CodeInline>
                をスタックに見立てて実装した。このあたり、AtCoderなどの競技プログラミングを触っていた経験が生きている。
                <br />
                ここまで前提任務について述べたが、後続任務に関しても全く同じである。（グラフの辺の向きを入れ替えただけ）
            </p>

            <h3>負荷軽減</h3>
            <p>
                検索機能をテキストボックスの値に結び付けた影響でキー入力のたびに検索が走って重くなったため、以下の対策を施した。
            </p>

            <h4>ページネーション</h4>
            <p>
                一度に表示する任務の量を少なくすれば勿論負荷軽減になるので、ページネーションを施した。
                <br />
                1ページあたりの表示件数は性能の低い端末を考えれば少ないほうがいいが、せっかく性能の高い端末を使っているのに1ページあたり20件では少なすぎてイライラする（※個人の感想です）ので、設定で20件・50件・100件・制限なしの4つから選べるようにした。
            </p>

            <h4>遅延反映</h4>
            <p>
                テキストボックスに表示するためのStateと、検索に用いるためのStateを分け、前者を遅延させて後者に反映させることで無駄な検索処理が走らないようにした。具体的には以下の通り。
            </p>
            <LazySearch />

            <h3>レスポンシブデザイン</h3>
            <p>
                検索結果は<CodeInline>{"<table>"}</CodeInline>で返し、セマンティクスも意識して1つの任務を1つの
                <CodeInline>{"<tr>"}</CodeInline>
                で表していため、このままでは横幅の狭い端末で見るとはみ出してしまう。
                <br />
                本アプリはPCでの利用を想定しているものの、このご時世にスマホで見たら横にはみ出すのは流石にダサい。
                <br />
                よって一定の横幅以下の場合は<CodeInline>{"<tr>"}</CodeInline>
                にCSSグリッドレイアウトを適用し、1行で表示していたものを複数行に分けた。
                <br />
                ただし、1行で表示している場合と異なり列ヘッダを表示する必要があるため、カスタムデータ属性・before疑似要素・
                <CodeInline>attr</CodeInline>関数の組み合わせでなんとかする。
            </p>
            <ColumnHeader />

            <h3>ヘルプページ</h3>
            <p>
                前提任務・後続任務など少々ややこしいところもあるので画像付きで説明を付けたいが、前述の通りレスポンシブデザインでデバイスの幅が広いときと狭いときの表示にそこそこ差がある。そのため、それだったらむしろ実際のコンポーネントを置いたほうがいいのではないかと考えた。
                <br />
                ただし本当にそのままコンポーネントを置くと保存データに影響を及ぼしてしまうので、コンテナ・プレゼンテーションパターンで関心の分離を行ったうえでモックを作成する。
                <br />
                具体的には検索結果の任務1つを表すコンポーネントを、プレゼンテーションのみを扱う
                <CodeInline>QuestTableRow</CodeInline>とロジック部分を扱うカスタムフック
                <CodeInline>useQuestTableRow</CodeInline>に分け、ヘルプページでは<CodeInline>QuestTableRow</CodeInline>
                を包含してモックを作った。
                <br />
                これによりレスポンシブデザインを反映できるだけではなく、実際に操作してどうなるかが確認できるサンプルが表示されることになるため、ユーザビリティを高めることにもなった。
                <br />
                （実際にどのくらいのユーザーがヘルプページをきちんと読むかどうかという問題はあるが…）
            </p>

            <h3>テスタビリティの確保</h3>
            <p>
                上でもちらっと述べたが、ほとんどのコンポーネントにおいてコンテナ・プレゼンテーションパターンで関心の分離を行うことにより、テスタビリティを確保することを意識した。これにより任務データをモックデータとして与えることで多少込み入った検索や「前提任務をすべて達成済にする」ボタンなどの挙動のテストがかなり楽に行えるようになった。
            </p>

            <h3>テスト</h3>
            <h4>Recoil Atomのオブザーバー</h4>
            <p>
                Atomの値の変化を見たいときは Recoil公式ドキュメントの
                <ExternalLink href="https://recoiljs.org/docs/guides/testing">Testing</ExternalLink>ページに書いてある
                <CodeInline>RecoilObserver</CodeInline>
                を実装して使えばOK。これは本当に便利。
            </p>

            <h4>Recoil Atomのモック</h4>
            <p>
                Vitestにファイル単位での置き換えを行う<CodeInline>mock</CodeInline>
                メソッドがあるのでそれを使えばOK、と思いきや
                <br />
                <CodeInline>mock</CodeInline>
                メソッドは巻き上げられるため、同じテストファイル内に2つ以上同一ファイルへのモックを書くと、前のものが後のもので上書きされてテストが通らなくなる。
                <br />
                一方でDynamic Importが必要になるものの<CodeInline>doMock</CodeInline>
                メソッドは巻き上げは起こらないので、こちらを使う方針で。
                <br />
                毎度同じ文言を書くと<CodeInline>doUnmock</CodeInline>
                を忘れるとか絶対にやらかすので、以下のヘルパー関数を用意する。
            </p>
            <AtomMock />
            <p>
                Atomの宣言時に変数名と<CodeInline>key</CodeInline>
                を一致させていないと使えないヘルパーだが、以下のように書けて便利。
            </p>
            <AtomMockUsage />
        </article>
    );
};

export default KanColleQuestManager;
