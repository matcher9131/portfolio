import { pageProperties } from "../properties";
import AnimateBeforeTransition from "./_codes/animateBeforeTransition";
import { LinkTypeDeclaration } from "./_codes/linkTypeDeclaration";
import TemplateEffect from "./_codes/templateEffect";
import TransitionLinkAfter from "./_codes/transitionLinkAfter";
import TransitionLinkBefore from "./_codes/transitionLinkBefore";
import TransitionLinkTypeDeclaration from "./_codes/transitionLinkTypeDeclaration";
import CodeBlock from "@/app/components/code/codeBlock";
import CodeInline from "@/app/components/code/codeInline";

const Portfolio = (): JSX.Element => {
    return (
        <article className="main-article">
            <h1>{pageProperties.name}</h1>
            <p>{pageProperties.description}</p>

            <h2>GitHub</h2>
            <iframe
                title="matcher9131/Slide"
                src="https://hatenablog-parts.com/embed?url=https://github.com/matcher9131/portfolio"
                className="w-full max-w-screen-sm"
            ></iframe>

            <h2>動作推奨環境</h2>
            <ul>
                <li>端末：PC</li>
                <li>ブラウザ：Google Chrome 最新版</li>
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
                        <td>フロントエンドフレームワーク</td>
                        <td>Next.js</td>
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
                </tbody>
            </table>

            <h2>使用技術の選定理由</h2>
            <p>
                まずReact + TypeScriptは確定で（理由は他作品で述べた通り）、さらに毎度愛用しているRecoil、Tailwind
                CSS、daisyUIを今回も起用。
                <br />
                「艦これ任務リストマネージャー」のようにviteのビルドオプションをいじってReactで複数のページを作っても良いのだが、ページを追加するたびにオプションをいじるのも面倒だし、そもそもアニメーション以外クライアント側で動かすものが無い静的サイトでクライアントサイドレンダリングは何か違う…と思い、Next.jsでSSG(Static
                Site Generation)を行うことにした。
            </p>

            <h2>開発時に苦労した点・工夫した点</h2>
            <h3>ページ遷移アニメーション</h3>
            <p>
                ポートフォリオには個性が必要だ、ということで並ではないページ遷移アニメーションを実装しようと考えた。それが「多数の星が流れてきてページの内容を消していく」というものである。
                <br />
                これを実現するために使える技術を選定していく。
            </p>

            <h4>ページ遷移後のアニメーションの技術選定</h4>
            <ul>
                <li>
                    View Transitions API
                    <ul>
                        <li>ページ間で共通の要素に対するアニメーションを簡潔に記述できる</li>
                        <li>一部ブラウザでは使えない</li>
                        <li>MPAに対してはまだ実験的要素</li>
                        <li>今回の仕様にはそぐわないと判断</li>
                    </ul>
                </li>
                <li>
                    CSS Transition
                    <ul>
                        <li>お馴染みのCSSプロパティが変化する際にアニメーションさせるもの</li>
                        <li>明示的にアニメーションさせるには結局JavaScriptが必要</li>
                        <li>それならWeb Animation APIのほうが簡潔に書けると考え不採用</li>
                    </ul>
                </li>
                <li>
                    Web Animation API
                    <ul>
                        <li>JavaScriptでDOMの要素にアニメーションをさせることができる</li>
                        <li>
                            <CodeInline>useRef</CodeInline>
                            などでDOM参照さえ持ってくれば自由にアニメーションができるため、採用
                        </li>
                    </ul>
                </li>
                <li>
                    react-transition-group
                    <ul>
                        <li>遷移前後のページが同時に存在する状態を作ることができるライブラリ</li>
                        <li>Next.js v13以降のApp Routerで使った解説記事を見つけられなかった</li>
                        <li>目的のものが実装できるのかもしれないが、わざわざ危険な橋を渡るまでもないと判断</li>
                    </ul>
                </li>
                <li>
                    Framer Motion
                    <ul>
                        <li>React用モーションライブラリ</li>
                        <li>複数の要素を個別にアニメーションさせる方法がわからなかった</li>
                        <li>今回の仕様にはそぐわないと判断</li>
                        <li>
                            ところで、公式サイトのIntroductionページを開こうとするとクライアント側で例外が発生したとかでコンテンツが表示されないけど大丈夫なんですかね…？
                        </li>
                    </ul>
                </li>
            </ul>
            <p>
                結果的にサードパーティーライブラリを使わない方向になった。
                <br />
                なおこの選定するにあたって1つ妥協点を用意し、ブラウザの戻る・進むやURL直打ちでページ遷移した場合は星のアニメーションは行わないことにした。（できるならやりたいが己の技術が足りん！）
            </p>

            <h4>ページ遷移前アニメーションの実装</h4>
            <p>
                ページ遷移前なので<CodeInline>router.push(href)</CodeInline>
                の前にアニメーションを仕込む必要がある。 よって手始めに Next.jsに用意されている
                <CodeInline>Link</CodeInline>コンポーネントをラップしてクリックイベントを書き換えたい。
                <br />
                <CodeInline>LinkProps</CodeInline>
                といういかにもらしい型がexportされているのでそれを使って以下のようにする。名付けて
                <CodeInline>TransitionLink</CodeInline>。
            </p>
            <TransitionLinkBefore />
            <p>ってエラー出とるやんけ…</p>
            <CodeBlock>{"Property 'children' does not exist on type 'InternalLinkProps'."}</CodeBlock>
            <p>
                型定義を見てみると<CodeInline>InternalLinkProps</CodeInline>は内部で使われているエイリアスのようだが、
                <CodeInline>Link</CodeInline>コンポーネントのみが持つプロパティしか定義されていないようだ。
                <br />
                それでは<CodeInline>Link</CodeInline>コンポーネント自体の型定義はどうなっているのだろうか…？
            </p>
            <LinkTypeDeclaration />
            <p>
                要するに<CodeInline>Link</CodeInline>の<CodeInline>props</CodeInline>は、
                <CodeInline>InternalLinkProps</CodeInline>、aタグが持つ属性（<CodeInline>InternalLinkProps</CodeInline>
                と重複する部分を除く）、<CodeInline>children</CodeInline>（と<CodeInline>ref</CodeInline>
                ）が受け取れるようだ。
                <br />
                …なら初めからそっちのほうをexportせんかい！
                <br />
                仕方がないので<CodeInline>LinkProps</CodeInline>の代わりに以下の
                <CodeInline>TransitionLinkProps</CodeInline>を定義して用いた。
            </p>
            <TransitionLinkTypeDeclaration />
            <p>
                あとは<CodeInline>usePageTransitionAnimation</CodeInline>
                というカスタムフックを用意して、そこで実際にページ遷移前のアニメーションを行うメソッド
                <CodeInline>animateBeforeTransition</CodeInline>
                を実装する。Web Animation APIの<CodeInline>animate</CodeInline>メソッドはアニメーション終了を知らせる
                <CodeInline>Promise</CodeInline>オブジェクトを返してくれるので、<CodeInline>Promise.all</CodeInline>
                で待つことにより全てのアニメーションが終了してからページ遷移に移ることができる。
            </p>
            <AnimateBeforeTransition />
            <p>
                これを<CodeInline>TransitionLink</CodeInline>で使えばOK。
            </p>
            <TransitionLinkAfter />

            <h4>ページ遷移後のアニメーションの技術選定</h4>
            <p>
                ページ遷移前アニメーションはほぼイメージ通り実装できたが、遷移後すぐにページが表示されるとちょっと味気ない感じになってしまったので、ページ遷移後のアニメーションもつけることにした。
                <br />
                ページ全体がふわっと表示される（<CodeInline>opacity</CodeInline>
                を0から1にする）などでも良かったのだが、折角なのでもう少し凝ってみることにして、星形の窓が拡大していくというのを考えた。
                <br />
                これを実装する技術として以下の2つがあるが
            </p>
            <ul>
                <li>
                    SVGの<CodeInline>mask</CodeInline>要素
                </li>
                <li>
                    CSSの<CodeInline>clip-path</CodeInline>プロパティ
                </li>
            </ul>
            <p>
                星形を作るだけならそこまで複雑ではないので、CSSの<CodeInline>clip-path</CodeInline>
                プロパティを用いて例によってWeb Animation APIの<CodeInline>animate</CodeInline>
                メソッドで実装することにする。
            </p>

            <h4>ページ遷移後のアニメーションの実装</h4>
            <p>
                先述のカスタムフック<CodeInline>usePageTransitionAnimation</CodeInline>
                にページ遷移後のアニメーションを行うメソッド
                <CodeInline>animateBeforeTransition</CodeInline>
                を実装し、これを然るべきところでimportして使う。
                <br />
                その然るべき場所というのは<CodeInline>template</CodeInline>である。<CodeInline>useEffect</CodeInline>
                でURLの変化を検知し、そこに<CodeInline>animateBeforeTransition</CodeInline>を仕込む。
            </p>
            <TemplateEffect />
        </article>
    );
};

export default Portfolio;
