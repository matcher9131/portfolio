const codeContent1 = `Items = SelectedDirectory
    .SelectMany(directory => ディレクトリ内の画像ファイルを列挙)
    .ToReadOnlyReactiveCollection(SelectedDirectory)`;
const codeContent2 = `Items = SelectedDirectory
    .Do(_ => ClearSubject.OnNext(Unit.Default))
    .SelectMany(directory => ディレクトリ内の画像ファイルを列挙)
    .ToReadOnlyReactiveCollection(ClearSubject)`;

const Slide = (): JSX.Element => {
    return (
        <article>
            <h1>Slider</h1>
            <p>簡易エクスプローラー機能を搭載した画像ビューアー（Windows用デスクトップアプリ）</p>

            {/* ここにスクリーンショット */}

            <h2>Github</h2>
            <iframe
                title="matcher9131/Slide"
                src="https://hatenablog-parts.com/embed?url=https://github.com/matcher9131/Slide"
                className="w-full max-w-screen-sm"
            ></iframe>

            <h2>動作推奨環境</h2>
            <p>Windows 10 or 11</p>

            <h2>使用技術</h2>
            <table>
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
                Windows11の「フォト」が使いにくい…往年の「スライドショー」を返して…との思いから、いっそのこと自分で作ったらいいのではと思い立った。
            </p>

            <h2>使用技術の選定理由</h2>
            <p>
                私のスキル的にWindows用デスクトップアプリを作る選択肢としてはWPF、Electron、Flutterの3つになる。それぞれのメリット・デメリットは
            </p>
            <ul>
                <li>
                    C# + WPF
                    <ul>
                        <li>
                            メリット
                            <ul>
                                <li>慣れているため大体の設計がすぐに思い浮かぶ</li>
                                <li>Parallel LINQで楽に処理を並列化できる</li>
                            </ul>
                        </li>
                        <li>
                            デメリット
                            <ul>
                                <li>今どきの主流から外れているため情報が少なめ && 古め</li>
                                <li>他プラットフォームに移植できない</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    TypeScript + React + Electron
                    <ul>
                        <li>
                            メリット
                            <ul>
                                <li>TypeScript + Reactには慣れているため大体の設計がすぐに思い浮かぶ</li>
                                <li>Reactに関する情報は豊富にある</li>
                                <li>macOSに移植しやすい</li>
                            </ul>
                        </li>
                        <li>
                            デメリット
                            <ul>
                                <li>Electronにあまり慣れていない</li>
                                <li>React + Electronとなると情報が少なめ</li>
                                <li>
                                    <code>contextBridge</code>まわりが面倒くさい
                                </li>
                                <li>
                                    ローカルファイルを網羅するとなるとNode.jsを使うことになるが並列処理がC#に比べると難易度が高い
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    Dart + Flutter
                    <ul>
                        <li>
                            メリット
                            <ul>
                                <li>様々なプラットフォーム対応できる</li>
                            </ul>
                        </li>
                        <li>
                            デメリット
                            <ul>
                                <li>Flutterに慣れていない</li>
                                <li>そもそも全フォルダを舐めることができるAPIがあるのかわからなかった</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <p>今回はWindows以外で動かすことを考えていないので移植性はかなぐり捨てて、C# + WPFを採用した。</p>

            <h2>開発時に苦労した点</h2>
            <h3>情報の鮮度</h3>
            <p>
                前述の通り情報が少なめかつ古め。加えて、WPFでアプリを作る際にReactivePropertyを必ず用いるわけではないので、WPF
                + ReactivePropertyとなるとさらに限られる。
                <br />
                せっかく得た情報がフレームワークのバージョンアップに伴い全く参考にならないこともあった。
            </p>

            <h3>ファイルリストの実装</h3>
            <p>
                ツリービューでディレクトリが選択されたときに、ファイルリストは「全アイテム消去」→「読み込んだファイルをすべて追加」という挙動をする。
                <br />
                ReactivePropertyではこれを宣言的に実装する必要があるため、バインドしているプロパティ（<code>Items</code>
                ）が「
                <code>SelectedDirectory</code>
                （選択されているディレクトリ）から新しい値が流れてきたらそのディレクトリ内の全画像ファイルを読み込んでリストに追加する」ようにすればよいのだが、このままだと既にあるアイテムを消すことなく新たに追加してしまう。
                <br />
                幸い<code>ToReadOnlyReactiveCollection</code>メソッドは内容を全て消去するタイミングを指定する
                <code>IObservable</code>を引数に取れるので、これに<code>SelectedDirectory</code>
                を与えることで「全アイテム消去」ができる。
            </p>
            <pre>
                <code>{codeContent1}</code>
            </pre>
            <p>
                これで解決と思いきや…
                <br />
                私は以下の処理順を期待したのだが。
            </p>
            <ol>
                <li>
                    <code>SelectedDirectory</code>に新しい値がセットされる
                </li>
                <li>
                    <code>Items</code>が空になる
                </li>
                <li>
                    <code>Items</code>に1つ目のファイルが追加される
                </li>
                <li>
                    <code>Items</code>に2つ目のファイルが追加される
                </li>
                <li>（以下略）</li>
            </ol>
            <p>しかし実際の処理順はおそらく以下のようで、1つ目のファイルが表示されないという現象に陥った。</p>
            <ol>
                <li>
                    <code>SelectedDirectory</code>に新しい値がセットされる
                </li>
                <li>
                    <code>Items</code>に1つ目のファイルが追加される
                </li>
                <li>
                    <code>Items</code>が空になる
                </li>
                <li>
                    <code>Items</code>に2つ目のファイルが追加される
                </li>
                <li>（以下略）</li>
            </ol>
            <p>
                ライブラリ内部の処理順をどうにかするのなんて無理だろ…と途方に暮れていたところ、<code>IObservable</code>
                の拡張メソッドに<code>Do</code>というものがあることに気づく。これは<code>IObservable</code>
                が新たな値を発行したときに予め設定したラムダ式を実行してくれるという優れもの。
            </p>
            <p>
                かくして、新たに<code>Subject</code>を用意し、<code>Do</code>メソッドで値を発行するようにして、前述の
                <code>ToReadOnlyReactiveCollection</code>
                メソッドの引数にこの<code>Subject</code>を与えれば、
            </p>
            <pre>
                <code>{codeContent2}</code>
            </pre>
            <p>以下の想定通りの処理順になる。</p>
            <ol>
                <li>
                    <code>SelectedDirectory</code>に新しい値がセットされる
                </li>
                <li>
                    <code>ClearSubject</code>が新しい値を発行する
                </li>
                <li>
                    <code>Items</code>が空になる
                </li>
                <li>
                    <code>Items</code>に1つ目のファイルが追加される
                </li>
                <li>
                    <code>Items</code>に2つ目のファイルが追加される
                </li>
                <li>（以下略）</li>
            </ol>
        </article>
    );
};

export default Slide;
