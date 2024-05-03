import CodeBlock from "@/app/components/code/codeBlock";
import CodeComment from "@/app/components/code/codeHighlight/codeComment";
import CodeFunction from "@/app/components/code/codeHighlight/codeFunction";
import CodeKeyword from "@/app/components/code/codeHighlight/codeKeyword";
import CodeNumberLiteral from "@/app/components/code/codeHighlight/codeNumberLiteral";
import CodeParameter from "@/app/components/code/codeHighlight/codeParameter";
import CodeProperty from "@/app/components/code/codeHighlight/codeProperty";
import CodeStatement from "@/app/components/code/codeHighlight/codeStatement";
import CodeStringLiteral from "@/app/components/code/codeHighlight/codeStringLiteral";
import CodeType from "@/app/components/code/codeHighlight/codeType";
import CodeVariable from "@/app/components/code/codeHighlight/codeVariable";
import CodeRow from "@/app/components/code/codeRow";

const NumericUpDown = (): JSX.Element => {
    // prettier-ignore
    return (
        <CodeBlock fileName="IntegerUpDown.xaml.cs" language="C#">
            <CodeRow>
                <CodeComment>{"// 文字入力を受け付けたときに事前に呼び出されるイベントメソッド"}</CodeComment>
            </CodeRow>
            <CodeRow>
                <CodeKeyword>private</CodeKeyword>{" "}<CodeKeyword>void</CodeKeyword>{" "}<CodeFunction>ValueTextBox_PreviewTextInput</CodeFunction>{"("}
                    <CodeKeyword>object</CodeKeyword>{" "}<CodeParameter>sender</CodeParameter>{", "}
                    <CodeType>TextCompositionEventArgs</CodeType>{" "}<CodeParameter>e</CodeParameter>
                {")"}
            </CodeRow>
            <CodeRow>{"{"}</CodeRow>
            <CodeRow indent={1}>
                <CodeStatement>if</CodeStatement>{" ("}
                    <CodeParameter>sender</CodeParameter>{" "}<CodeKeyword>is</CodeKeyword>{" "}<CodeKeyword>not</CodeKeyword>{" "}<CodeType>TextBox</CodeType>{" "}<CodeVariable>textbox</CodeVariable>
                {") "}<CodeStatement>return</CodeStatement>{";"}
            </CodeRow>
            <CodeRow></CodeRow>
            <CodeRow indent={1}>
                <CodeComment>{"// 入力を反映させた文字列を実際に作ってみて、それが条件に合わなければ入力を弾く"}</CodeComment>
            </CodeRow>
            <CodeRow indent={1}>
                <CodeComment>{"// 選択範囲がある場合、選択範囲を入力文字で置き換えた文字列を作る"}</CodeComment>
            </CodeRow>
            <CodeRow indent={1}>
                <CodeComment>{"// 選択範囲がない場合、カーソル位置に入力文字を挿入した文字列を作る"}</CodeComment>
            </CodeRow>
            <CodeRow indent={1}>
                <CodeKeyword>string</CodeKeyword>{" "}<CodeVariable>newText</CodeVariable>{" = "}
                <CodeVariable>textbox</CodeVariable>{"."}<CodeProperty>SelectionLength</CodeProperty>{" > "}<CodeNumberLiteral>0</CodeNumberLiteral>
                    {" ? "}<CodeKeyword>string</CodeKeyword>{"."}<CodeFunction>Concat</CodeFunction>{"("}
            </CodeRow>
            <CodeRow indent={3}>
                <CodeVariable>textbox</CodeVariable>{"."}<CodeProperty>Text</CodeProperty>{"."}<CodeFunction>AsSpan</CodeFunction>{"("}
                    <CodeNumberLiteral>0</CodeNumberLiteral>{", "}<CodeVariable>textbox</CodeVariable>{"."}<CodeProperty>SelectionStart</CodeProperty>
                {"),"}
            </CodeRow>
            <CodeRow indent={3}>
                <CodeParameter>e</CodeParameter>{"."}<CodeProperty>Text</CodeProperty>{","}
            </CodeRow>
            <CodeRow indent={3}>
                <CodeVariable>textbox</CodeVariable>{"."}<CodeProperty>Text</CodeProperty>{"."}<CodeFunction>AsSpan</CodeFunction>{"("}
                    <CodeVariable>textbox</CodeVariable>{"."}<CodeProperty>SelectionStart</CodeProperty>{" + "}<CodeVariable>textbox</CodeVariable>{"."}<CodeProperty>SelectionLength</CodeProperty>
                {")"}
            </CodeRow>
            <CodeRow indent={2}>
                {") : "}<CodeKeyword>string</CodeKeyword>{"."}<CodeFunction>Concat</CodeFunction>{"("}
            </CodeRow>
            <CodeRow indent={3}>
                <CodeVariable>textbox</CodeVariable>{"."}<CodeProperty>Text</CodeProperty>{"."}<CodeFunction>AsSpan</CodeFunction>{"("}
                    <CodeNumberLiteral>0</CodeNumberLiteral>{", "}<CodeVariable>textbox</CodeVariable>{"."}<CodeProperty>CaretIndex</CodeProperty>
                {"),"}
            </CodeRow>
            <CodeRow indent={3}>
                <CodeParameter>e</CodeParameter>{"."}<CodeProperty>Text</CodeProperty>{","}
            </CodeRow>
            <CodeRow indent={3}>
                <CodeVariable>textbox</CodeVariable>{"."}<CodeProperty>Text</CodeProperty>{"."}<CodeFunction>AsSpan</CodeFunction>{"("}
                    <CodeVariable>textbox</CodeVariable>{"."}<CodeProperty>CaretIndex</CodeProperty>
                {")"}
            </CodeRow>
            <CodeRow indent={2}>{");"}</CodeRow>
            <CodeRow indent={1}>
                <CodeStatement>if</CodeStatement>{" ("}
                    {"!"}<CodeProperty>integerExtraZeroRegex</CodeProperty>{"."}<CodeFunction>IsMatch</CodeFunction>{"("}
                        <CodeVariable>newText</CodeVariable>
                    {")"}
                {")"}
                {" "}<CodeComment>{"// 正規表現で判断"}</CodeComment>
            </CodeRow>
            <CodeRow indent={1}>{"{"}</CodeRow>
            <CodeRow indent={2}>
                <CodeParameter>e</CodeParameter>{"."}<CodeProperty>Handled</CodeProperty>{" = "}<CodeKeyword>true</CodeKeyword>{";"}
            </CodeRow>
            <CodeRow indent={2}>
                <CodeStatement>return</CodeStatement>{";"}
            </CodeRow>
            <CodeRow indent={1}>{"}"}</CodeRow>
            <CodeRow>{"}"}</CodeRow>

            <CodeRow></CodeRow>

            <CodeRow>
                <CodeComment>{"// フォーカスを失ったときに呼び出されるイベントメソッド"}</CodeComment>
            </CodeRow>
            <CodeRow>
                <CodeKeyword>private</CodeKeyword>{" "}<CodeKeyword>void</CodeKeyword>{" "}<CodeFunction>ValueTextBox_LostFocus</CodeFunction>{"("}
                    <CodeKeyword>object</CodeKeyword>{" "}<CodeParameter>sender</CodeParameter>{", "}
                    <CodeType>RoutedEventArgs</CodeType>{" "}<CodeParameter>e</CodeParameter>
                {")"}
            </CodeRow>
            <CodeRow>{"{"}</CodeRow>
            <CodeRow indent={1}>
                <CodeStatement>if</CodeStatement>{" ("}
                    <CodeParameter>sender</CodeParameter>{" "}<CodeKeyword>is</CodeKeyword>{" "}<CodeKeyword>not</CodeKeyword>{" "}<CodeType>TextBox</CodeType>{" "}<CodeVariable>textbox</CodeVariable>
                {") "}<CodeStatement>return</CodeStatement>{";"}
            </CodeRow>
            <CodeRow></CodeRow>
            <CodeRow indent={1}>
                <CodeStatement>if</CodeStatement>{" ("}
                    <CodeKeyword>int</CodeKeyword>{"."}<CodeFunction>TryParse</CodeFunction>{"("}
                        <CodeVariable>textbox</CodeVariable>{"."}<CodeProperty>Text</CodeProperty>{", "}
                        <CodeKeyword>out</CodeKeyword>{" "}<CodeKeyword>int</CodeKeyword>{" "}<CodeVariable>value</CodeVariable>
                    {")"}
                {")"}
            </CodeRow>
            <CodeRow indent={1}>{"{"}</CodeRow>
            <CodeRow indent={2}>
                <CodeComment>{"// 先頭に余分なゼロが付いているなど、10進数値として解釈できるがフォーマルでない文字列が"}</CodeComment>
            </CodeRow>
            <CodeRow indent={2}>
                <CodeComment>{"// 入力された状態でフォーカスを失った場合は、文字列をフォーマルなものにする"}</CodeComment>
            </CodeRow>
            <CodeRow indent={2}>
                <CodeVariable>textbox</CodeVariable>{"."}<CodeProperty>Text</CodeProperty>{" = "}<CodeVariable>value</CodeVariable>{"."}<CodeFunction>ToString</CodeFunction>{"();"}
            </CodeRow>
            <CodeRow indent={1}>{"}"}</CodeRow>
            <CodeRow indent={1}>
                <CodeStatement>else</CodeStatement>
            </CodeRow>
            <CodeRow indent={1}>{"{"}</CodeRow>
            <CodeRow indent={2}>
                <CodeComment>{"// PreviewTextInputメソッドでは入力途中に発生する「空白」や「マイナス記号のみ」の"}</CodeComment>
            </CodeRow>
            <CodeRow indent={2}>
                <CodeComment>{"// 文字列も通すようにしているので、その状態（あるいは何らかの原因で10進整数として"}</CodeComment>
            </CodeRow>
            <CodeRow indent={2}>
                <CodeComment>{"// 解釈できない文字列が入力された状態）でフォーカスを失った時にゼロを突っ込んでおく"}</CodeComment>
            </CodeRow>
            <CodeRow indent={2}>
                <CodeComment>{"// （ここには書いていないがPropertyChangedCallbackにより適切な値に強制される）"}</CodeComment>
            </CodeRow>
            <CodeRow indent={2}>
                <CodeVariable>textbox</CodeVariable>{"."}<CodeProperty>Text</CodeProperty>{" = "}<CodeStringLiteral>{`"0"`}</CodeStringLiteral>{";"}
            </CodeRow>
            <CodeRow indent={1}>{"}"}</CodeRow>
            <CodeRow>{"}"}</CodeRow>

            <CodeRow></CodeRow>

            <CodeRow>
                <CodeKeyword>private</CodeKeyword>{" "}<CodeKeyword>void</CodeKeyword>{" "}<CodeFunction>ValueTextBox_PreviewExecuted</CodeFunction>{"("}
                    <CodeKeyword>object</CodeKeyword>{" "}<CodeParameter>sender</CodeParameter>{", "}
                    <CodeType>ExecutedRoutedEventArgs</CodeType>{" "}<CodeParameter>e</CodeParameter>
                {")"}
            </CodeRow>
            <CodeRow>{"{"}</CodeRow>
            <CodeRow indent={1}>
                <CodeComment>{"// ペーストを無効にする"}</CodeComment>
            </CodeRow>
            <CodeRow indent={1}>
                <CodeStatement>if</CodeStatement>{" ("}
                    <CodeParameter>e</CodeParameter>{"."}<CodeProperty>Command</CodeProperty>{" == "}<CodeType>ApplicationCommands</CodeType>{"."}<CodeProperty>Paste</CodeProperty>
                {") "}
                <CodeParameter>e</CodeParameter>{"."}<CodeProperty>Handled</CodeProperty>{" = "}<CodeKeyword>true</CodeKeyword>{";"}
            </CodeRow>
            <CodeRow>{"}"}</CodeRow>
        </CodeBlock>
    );
};

export default NumericUpDown;
