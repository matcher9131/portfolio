import { type Metadata } from "next";
import NumericUpDown from "./_codes/numericUpdown";
import { pageProperties } from "./properties";
import { siteTitle } from "@/app/_shared/const";
import CodeInline from "@/app/components/code/codeInline";
import ExternalLink from "@/app/components/externalLink";

export const metadata: Metadata = {
    title: `${pageProperties.name} - ${siteTitle}`,
};

const MultiTimer = (): JSX.Element => {
    return (
        <>
            <article className="main-article">
                <h1>{pageProperties.name}</h1>
                <p>{pageProperties.description}</p>

                {/* ここにスクリーンショット */}

                <h2>Github</h2>
                <iframe
                    title="matcher9131/MultiTimer"
                    src="https://hatenablog-parts.com/embed?url=https://github.com/matcher9131/MultiTimer"
                    className="w-full max-w-screen-sm"
                ></iframe>

                <h2>機能</h2>
                <p>以下の機能を持つタイマーを複数同時に走らせられる</p>
                <ul>
                    <li>中断・再開が可能</li>
                    <li>残り時間が少なくなるとハイライト表示</li>
                    <li>残り時間がなくなったときにアラームを鳴らす（タイマーごとにオン・オフが設定可能）</li>
                </ul>

                <h2>動作推奨環境</h2>
                <p>Windows 10 or 11</p>

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
                            <td>C#</td>
                        </tr>
                        <tr>
                            <td>プログラミング言語</td>
                            <td>XAML</td>
                        </tr>
                        <tr>
                            <td>フレームワーク</td>
                            <td>WPF</td>
                        </tr>
                        <tr>
                            <td>フレームワーク</td>
                            <td>Prism</td>
                        </tr>
                        <tr>
                            <td>ライブラリ</td>
                            <td>Reactive Property</td>
                        </tr>
                        <tr>
                            <td>DIコンテナ</td>
                            <td>Unity Container</td>
                        </tr>
                    </tbody>
                </table>

                <h2>このアプリを作ったきっかけ</h2>
                <p>
                    PCで動く、かつ複数のタイマーの残り時間が同時にわかるアプリが案外無いことに気づき、探すより作ったほうが早いという結論に至った。
                </p>

                <h2>使用技術の選定理由</h2>
                <p>
                    昔にC# + WPFでこれと似たアプリを作っていたため、さらにPrismやReactive
                    Propertyを用いて機能を追加することにした。
                </p>

                <h2>開発時に苦労した点・工夫した点</h2>
                <h3>数値選択コントロール</h3>
                <h4>
                    なぜか存在しない<CodeInline>NumericUpDown</CodeInline>
                </h4>
                <p>
                    かつてのスタンダードであるWindows
                    Formsには数値のみを受け付けるテキストボックスと数値を増減できるスピンボタンがついた
                    <CodeInline>NumericUpDown</CodeInline>コントロールがあるが、なぜかWPFには存在しない。
                    <br />
                    勿論公式ライブラリに存在しないだけでサードパーティーには存在するのだが、私がかつて愛用していたExtended
                    WPF Toolkitは.NET 5.0までの対応で細々としかメンテされていない。（試したところ.NET
                    8.0でも使えるようだが不安が残る）
                    <br />
                    他のものを試すにしてもカスタマイズ性（整数のみの入力が可能かどうか、最小値・最大値を指定できるかどうか、Bindingがきちんとできるかどうかetc）を確認する暇があれば自作できるのではないかと考え、自分で作ることにした。
                </p>

                <h4>数値のみを受け付けるテキストボックス</h4>
                <p>
                    <CodeInline>NumericUpDown</CodeInline>コントロールは<CodeInline>Slider</CodeInline>
                    など数値の選択ができる他のコントロールとは異なり、テキストボックスに数値を直に打ちこめるというのがポイントになる。そのため、数値以外の入力をはじく必要がある。
                    <br />
                    基本的な考え方は
                    <ExternalLink href="https://gogowaten.hatenablog.com/entry/2020/06/21/204822">
                        WPFにもNumericUpDownみたいなのをユーザーコントロールで
                    </ExternalLink>
                    を参考にして、以下の仕掛けを施した。（抜粋）
                </p>
                <NumericUpDown />

                <h4>名ばかりのCoerce</h4>
                <p>
                    <CodeInline>NumericUpDown</CodeInline>
                    コントロールは受け付ける値の最小値・最大値を設定できる（かついつでも変更できる）ので、現在の値・最小値・最大値の整合性を自動的にとれるようにしておく必要がある。
                    <br />
                    なんとMicrosoft公式が直々に
                    <ExternalLink href="https://learn.microsoft.com/ja-jp/dotnet/desktop/wpf/properties/dependency-property-callbacks-and-validation?view=netdesktop-8.0">
                        依存関係プロパティのコールバックと検証 (WPF .NET)
                    </ExternalLink>
                    でこのケースと全く同じ例を挙げてくれているので、それに基づいて
                    <CodeInline>CoerceValueCallback</CodeInline>を実装したのだが…
                </p>
                <p>
                    <strong>普通に現在の値が最小値を貫通するぞ…？</strong>
                </p>
                <p>
                    調べてみると
                    <ExternalLink href="http://var.blog.jp/archives/67898237.html">
                        DepdencyProperty の CoerceValueCallback が Binding ソースに反映されない
                    </ExternalLink>
                    に以下の記載があった。
                </p>
                <blockquote cite="http://var.blog.jp/archives/67898237.html" className="rounded bg-neutral p-4">
                    CoerceValueCallback で値変えても Binding ソースは変える前の値で更新される
                </blockquote>
                <p>
                    <b>控えめに言ってバグじゃねーか！</b>
                    <br />
                    万一仕様だとしてもこれは仕様バグと言わざるを得ない。何のためのCoerce（強制）なのか…
                    <br />
                    まぁ上述のページにあるとおり<CodeInline>CoerceValueCallback</CodeInline>
                    を使わなければ良いだけの話ではあるので、その方針で実装した。
                </p>

                <h3>内部タイマーの選択とテスタビリティの確保</h3>
                <h4>
                    <CodeInline>Stopwatch</CodeInline>クラスの代替
                </h4>
                <p>
                    そもそも本アプリは1つのタイマーにつきいくつかの内部タイマーを使用している。初期の設計では以下の選択をした。
                </p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>目的</th>
                            <th>必要な機能</th>
                            <th>選択したもの</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>時間計測</td>
                            <td>
                                <ul>
                                    <li>停止・再開が10ミリ秒の精度で自由にできる</li>
                                </ul>
                            </td>
                            <td>
                                <CodeInline>System.Diagnostics.Stopwatch</CodeInline>クラス
                            </td>
                        </tr>
                        <tr>
                            <td>Viewへ通知</td>
                            <td>
                                <ul>
                                    <li>
                                        <CodeInline>IObservable</CodeInline>を継承している
                                    </li>
                                    <li>一定の時間間隔で値を発行する</li>
                                </ul>
                            </td>
                            <td>
                                <CodeInline>System.Reactive.Linq.Observable.Interval</CodeInline>メソッド
                            </td>
                        </tr>
                        <tr>
                            <td>アラームを1秒間隔で鳴らす</td>
                            <td>
                                <ul>
                                    <li>
                                        <CodeInline>IObservable</CodeInline>を継承している
                                    </li>
                                    <li>一定の時間間隔で値を発行する</li>
                                    <li>停止・再開ができる</li>
                                </ul>
                            </td>
                            <td>
                                <CodeInline>Reactive.Bindings.ReactiveTimer</CodeInline>クラス
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    ここでテスタビリティについて考えてみる。
                    <br />
                    経過時間が絡むテストではスケジューラーに
                    <CodeInline>Microsoft.Reactive.Testing.TestScheduler</CodeInline>クラスのインスタンスを指定すれば、
                    <CodeInline>AdvanceBy</CodeInline>
                    メソッドなどにより時間の経過をエミュレートすることができてテスト時間を大幅に短縮できる。
                    <br />
                    <CodeInline>Observable.Interval</CodeInline>メソッドおよび
                    <CodeInline>ReactiveTimer</CodeInline>クラスのコンストラクタはともに
                    <CodeInline>IScheduler</CodeInline>を引数に持つため、テスト時には
                    <CodeInline>TestScheduler</CodeInline>
                    のインスタンスを 、実行時にはデフォルトのスケジューラーである
                    <CodeInline>System.Reactive.Concurrency.Scheduler.Default</CodeInline>
                    を渡せばよい。しかし<CodeInline>Stopwatch</CodeInline>
                    クラスはそれができず、かつモックを用意しようにも一から作ることになる。
                    <br />
                    よって時間計測に<CodeInline>Stopwatch</CodeInline>クラスを用いることを断念し、代替案を探すのだが…
                </p>

                <h4>仕様を満たせない代替案</h4>
                <p>
                    そもそも<CodeInline>Observable.Interval</CodeInline>は停止後に再開ができないため却下。
                    <br />
                    次に<CodeInline>ReactiveTimer</CodeInline>
                    は停止・再開ができるが、再開と同時に新たな値を発行するという挙動が本アプリに合わない。
                    <br />
                    具体的な例として、<CodeInline>ReactiveTimer</CodeInline>
                    で100ミリ秒間隔で新たな値を発行し、ViewModel側で新たな値を受け取るたびに残り時間を100ミリ秒減らすという実装にしたとする。この際、
                    <CodeInline>ReactiveTimer</CodeInline>
                    が最後に値を発行してから50ミリ秒のところでタイマーを一時停止した場合、再開してから50ミリ秒後に新たな値を流してくれないと経過時間がずれてしまう。しかし実際には再開と同時に新たな値が流れてしまうため、一時停止・再開をするたびに平均して50ミリ秒ずつ残り時間が実際より少なくなる。
                    <br />
                    当然これは意図する挙動ではないので、<CodeInline>ReactiveTimer</CodeInline>も却下。
                </p>

                <h4>スケジューラーから攻める</h4>
                <p>
                    ここで<CodeInline>IScheduler</CodeInline>のIntelliSenseが示す候補のなかに
                    <CodeInline>StartStopwatch</CodeInline>なるメソッドがあることに気づく。
                    <br />
                    まさにこれだ！と思ったのだが、メソッドの返り値である
                    <CodeInline>System.Reactive.Concurrency.IStopwatch</CodeInline>インタフェースは経過時間を示す
                    <CodeInline>Elapsed</CodeInline>プロパティがあるのみで、一時停止・再開は不可能である。
                    <br />
                    仕方ないので、一時停止中でも内部ではストップウォッチを回し続ける代わりに、一時停止・再開をしたときの経過時間を元に一時停止中の経過時間を計算することで対応した。
                    <br />
                    （なおこの方法ならスケジューラーやらタイマーやら使わなくても<CodeInline>DateTime</CodeInline>
                    で時刻を見るだけでもできてしまう…。まぁシステム時刻が使用中に変化しても大丈夫な方法ということで。）
                </p>
            </article>
        </>
    );
};

export default MultiTimer;
