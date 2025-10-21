import { type Metadata } from "next";
import { pageProperties } from "./properties";
import CodeInline from "@/app/_components/code/codeInline";
import ExternalLink from "@/app/_components/externalLink";
import LinkCard from "@/app/_components/linkCard/linkCard";
import { siteTitle } from "@/app/_shared/const";

export const metadata: Metadata = {
    title: `${pageProperties.name} - ${siteTitle}`,
};

const Virejo = (): JSX.Element => {
    return (
        <article className="main-article">
            <h1>{pageProperties.name}</h1>
            <p>{pageProperties.description}</p>

            <h2>Github</h2>
            <LinkCard href="https://github.com/matcher9131/virejo" />

            <h2>機能</h2>
            <ul>
                <li>右クリックですぐにテストファイルを作成できる</li>
                <li>
                    <CodeInline>.ts</CodeInline>ファイル、<CodeInline>.tsx</CodeInline>ファイルに対応
                </li>
                <li>
                    ファイル名によって以下の3つに自動で分岐し、適切なスタブを作成してモックする
                    <ul>
                        <li>
                            Reactカスタムフック: <CodeInline>atom, atomFamily</CodeInline>で作られたAtomおよび
                            <CodeInline>useAtom, useAtomValue</CodeInline>のスタブ
                        </li>
                        <li>Reactコンポーネント: 内部で呼び出しているコンポーネントおよびカスタムフックのスタブ</li>
                        <li>他: 基本的な関数のスタブ</li>
                    </ul>
                </li>
            </ul>

            <h2>使い方</h2>
            <p>
                VS CodeのExplorer画面で対象となるファイルを右クリックして、コンテキストメニューから
                <CodeInline>Generate Test File</CodeInline>を選択する
            </p>

            <h2>動作推奨環境</h2>
            <ul>
                <li>VS Code 1.93.0以降</li>
                <li>
                    対象となるファイルの拡張子が<CodeInline>.ts, .tsx</CodeInline>であること
                </li>
                <li>テストフレームワークにVitestを使用していること</li>
                <li>状態管理ライブラリにJotaiを使用していること</li>
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
                        <td>プラットフォーム</td>
                        <td>Node.js</td>
                    </tr>
                    <tr>
                        <td>生成AI</td>
                        <td>Claude Code</td>
                    </tr>
                    <tr>
                        <td>リンター</td>
                        <td>ESLint</td>
                    </tr>
                    <tr>
                        <td>テストツール</td>
                        <td>
                            Sinon.JS
                            <br />
                            @vscode/test-cli
                        </td>
                    </tr>
                </tbody>
            </table>

            <h2>このアプリを作ったきっかけ</h2>
            <p className="py-1.5">
                生成AIのGitHub CopilotやClaude
                Codeにテストコードを作らせると、ファイルによって（同様のことを達成するのに）書き方が異なることが多々あった。
                特にモック周りで差異が顕著であり、そのままでは保守性が損なわれるし、かといって毎度書き直すのもモックの数が多くなると厳しい。
                よってせめてモック周りだけでも自動で判別して一定のコードを書いてくれるような拡張機能があれば捗るのではないかと考えた。
            </p>

            <h2>使用技術の選定理由</h2>
            <p className="py-1.5">
                今回は（部分的ではなく）全体的に生成AIを使用することを目標とした。
                AIコーディングツールは特に2025年になって様々なものが出現したが、トークン量を気にしながらの開発は鬱陶しいため定額課金制であること、
                およびQiitaやZenでそれなりに説明記事があることを踏まえ、Claude Codeを試してみることにした。
            </p>

            <h2>開発時に苦労した点・工夫した点</h2>
            <h3>AIへの指示出し</h3>
            <p className="py-1.5">
                （Claude Codeがそうかどうかはわからないが）
                AIコーディングツールは英語で考えさせたほうがいいインプットを得るという記事や投稿をいくつか見かけたので、指示出しは基本全て英語とした。
                英作文の練習にもなってヨシ！
            </p>

            <h3>設定</h3>
            <p className="py-1.5">
                Claude
                CodeはBashで破壊系のコマンドを実行する際は事前にこちらに実行していいかの許可を求めてくる初期設定になっているが、念の為
                <ExternalLink href="https://izanami.dev/post/d6f25eec-71aa-4746-8c0d-80c67a1459be">
                    Claude Code に壊されないための denyルール完全ガイド - izanami
                </ExternalLink>
                を参考にして破壊系コマンドそのものの実行を封じておいた。
            </p>
            <p className="py-1.5">
                これのせいで、書き捨ての小さいスクリプトを書いて実行した結果を元に実装コードを調整するという動作をしたときに
                そのスクリプトを消去することができずに残ってしまったり、
                テストを実行したいが中途半端なファイルがあるせいでテスト前のリンターでエラーが出てしまう際に
                中途半端なファイルを消去できずに苦肉の策で拡張子を変更したりと、
                余計な労力が必要となり振り回されるClaude Codeの姿が見られた。
            </p>

            <h3>初期の指示出し</h3>
            <p className="py-1.5">
                AIコーディングツールを使って一から開発するのは初めてだったので、
                <ExternalLink href="https://zenn.dev/hokuto_tech/articles/86d1edb33da61a">
                    Claude Code を初めて使う人向けの実践ガイド
                </ExternalLink>
                を参考にして、
            </p>
            <ol>
                <li>まずはClaudeにどのようなものを作りたいのかを伝えて</li>
                <li>得られたCLAUDE.mdをプロジェクトフォルダに置いて</li>
                <li>このファイルを参考にして開発をするように伝えた</li>
            </ol>
            <p className="py-1.5">
                なお、ひとまず「<CodeInline>.ts, .tsx</CodeInline>
                ファイルを対象として右クリックするとファイルの内容に沿ったテストコードが書かれたファイルが生成される」
                ことを目標としたので、このときはモックに関して一切指示を出していない。
            </p>
            <p className="py-1.5">
                ただ開発してと言っただけなのに、ビジネスロジックの切り分けから実装に至るまで全自動で事が進んで行くのは新時代を感じた。
                恐ろしい（？）ことにAST（抽象構文木）などの込み入ったワードは一切出していないにも拘らず、である。
                （無論CLAUDE.mdにASTについての言及があるからなのではあるが）
            </p>

            <h3>モック機能の指示出し</h3>
            <p className="py-1.5">
                条件分岐および出してほしいアウトプットがはっきりしていたので、Markdownファイルに詳細を書いてそれを投げることにした。
                <ExternalLink href="https://github.com/matcher9131/virejo/blob/main/.claude/mocking_concepts.md">
                    レポジトリ内の.claude/mocking_concepts.md
                </ExternalLink>
                がそれにあたり、入力コード例に対する出力コード例などかなり力を入れて書いた。やはり指示出しを細かくしたおかげか、非常に正確なコードが得られた。
            </p>

            <h3>テスト</h3>
            <p className="py-1.5">
                テストコード作成も「スタブを作りたいときはSinon.JSを使って」以外特に何も言わなくとも何事もなく進んだが、実行時に環境由来のエラーが発生し難儀した。
                結局のところはどうやらWSL上だと実際にVS
                Codeを起動して拡張機能のテストすることが何らかのバグでできないようであることがわかり、
                Windows側に開発ディレクトリをすべて移動して事なきを得た。
            </p>
            <p className="py-1.5">
                しかし結構表面化しづらいパターンだったのか、「こういうエラーが出ているから直して」とClaude
                Codeに伝えてもなかなか直らず、
                他の生成AIに尋ねてみたり、従来の人がGoogleで普通に検索したりなどといろいろやった挙げ句ようやく原因らしきものがわかったため、
                コアなケースだとなんでもかんでもAIに任せるわけにもいかない、という教訓を得た。
            </p>
            <p className="py-1.5">
                ちなみに、なぜWSL上で開発を行っていたのかについては、Claude
                Codeは直近までWindowsでは動かなかったためである。
                本拡張機能の開発を始めたときにはすでにWindowsに対応していたが、念の為Linux上で開発しようと思ったのが仇になった。
            </p>
        </article>
    );
};

export default Virejo;
