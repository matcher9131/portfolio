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

            <h2>機能</h2>
            <ul>
                <li>簡易エクスプローラーから選択したディレクトリ内の画像ファイルをリストで表示</li>
                <li>リストから選択したファイルの内容を表示</li>
                <li>各ファイルに4段階のお気に入りレベルを設定可能</li>
                <li>お気に入りレベルによるフィルター表示が可能</li>
                <li>ビットマップ、PNG、JPEG、GIF（アニメーションを除く）、WebPに対応</li>
            </ul>

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
                        <li className="pros">慣れているため大体の設計がすぐに思い浮かぶ</li>
                        <li className="pros">Parallel LINQで楽に処理を並列化できる</li>
                        <li className="cons">今どきの主流から外れているため情報が少なめ && 古め</li>
                        <li className="cons">他プラットフォームに移植できない</li>
                    </ul>
                </li>
                <li>
                    TypeScript + React + Electron
                    <ul>
                        <li className="pros">TypeScript + Reactには慣れているため大体の設計がすぐに思い浮かぶ</li>
                        <li className="pros">Reactに関する情報は豊富にある</li>
                        <li className="pros">macOSに移植しやすい</li>
                        <li className="cons">Electronにあまり慣れていない</li>
                        <li className="cons">React + Electronとなると情報が少なめ</li>
                        <li className="cons">
                            <code>contextBridge</code>まわりが面倒くさい
                        </li>
                        <li className="cons">
                            ローカルファイルを網羅するとなるとNode.jsを使うことになるが並列処理がC#に比べると難易度が高い
                        </li>
                    </ul>
                </li>
                <li>
                    Dart + Flutter
                    <ul>
                        <li className="pros">様々なプラットフォーム対応できる</li>
                        <li className="cons">Flutterに慣れていない</li>
                        <li className="cons">そもそも全フォルダを舐めることができるAPIが存在するのかわからない</li>
                    </ul>
                </li>
            </ul>
            <p>今回はWindows以外で動かすことを考えていないので移植性はかなぐり捨てて、C# + WPFを採用した。</p>

            <h2>開発時に苦労した点・工夫した点</h2>
            <h3>情報の鮮度</h3>
            <p>
                前述の通り情報が少なめかつ古め。加えて、WPFでアプリを作る際にReactivePropertyを必ず用いるわけではないので、WPF
                + ReactivePropertyとなるとさらに限られる。
                <br />
                せっかく得た情報がフレームワークのバージョンアップに伴い全く参考にならないこともあった。
            </p>

            <h3>簡易エクスプローラーの実装</h3>
            <p>
                ディレクトリ構造は直感的に操作しやすいツリービューで表示、かつ処理軽減のためにサブディレクトリは遅延読み込みにするという設計にした。
                <br />
                ツリービューは各アイテムが子要素を持つ場合に限り左側に開閉ボタンが表示される仕様になっているため、まだ読み込んでいないディレクトリの子要素を空のままにしておくとディレクトリを開けなくなってしまう。
                <br />
                これを回避するために予め子要素にダミーデータを仕込んでおき、ディレクトリが読み込まれたときに実際のサブディレクトリに置き換えるという実装にした。
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
            <p>しかし実際の処理順はおそらく以下のようで、1つ目のファイルのみが表示されないという現象に陥った。</p>
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
                の拡張メソッドに<code>Do</code>というものがあることに気づく。
                <br />
                これは<code>IObservable</code>
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

            <h3>読み込めないファイルへの対処</h3>
            <p>
                C#標準ライブラリで画像を取り扱う方法は大きく分けて<code>System.Drawing</code>
                名前空間のクラスを用いるもの（以下、方法A）と
                <code>System.Windows.Media.Imaging</code>
                名前空間のクラスを用いるもの（以下、方法B）の2つがあり、方法Aが昔ながらの比較的低いレイヤー、方法Bは新しく用意された比較的高いレイヤーのものである。
                <br />
                勿論方法Bで画像の読み込み処理をしていたのだが、「フォト」や「ペイント」などでは開けるのに方法Bだと例外を吐くファイルが存在することに気づく。
                <br />
                仕方がないので、方法Bによる読み込みに失敗した場合は改めて方法Aで読み込むことにした。（方法Bでしか読み込めないファイルが存在する可能性を考慮し、すべて方法Aで読み込む実装は見送った。）
                <br />
                正直、同じ画像ファイルの読み込みという処理なのに方法Aと方法Bで結果が異なるというのは標準ライブラリとしてどうなんだ？と思わざるを得ない。
            </p>

            <h3>ファイル・ディレクトリのソート順</h3>
            <p>
                エクスプローラーではファイル・ディレクトリを名前順にソートするときに自然順ソート（数字の部分のみ数値として比較、それ以外は辞書順で比較）が採用されているため、これを本アプリでも実現したい。
                <br />
                ありがたいことにWindows標準関数に自然順で比較する<code>StrCmpLogicalW</code>
                関数があるため、これを利用すれば実装できる。
            </p>

            <h3>多重起動の防止</h3>
            <p>
                お気に入りレベルは自動的に保存される仕様にしたが、頻繁なディスクアクセスを避けるために、そのタイミングはアプリの終了時とした。
                <br />
                そのため本アプリを多重起動すると、一方で設定したお気に入りレベルがもう一方のお気に入りレベルで上書き保存される可能性がある。これを防ぐために
                <code>Mutex</code>クラスにより多重起動を禁止した。
            </p>
        </article>
    );
};

export default Slide;
