import { type Metadata } from "next";
import { pageProperties } from "./properties";
import { siteTitle } from "@/app/_shared/const";
import ImgWithBasePath from "@/app/_shared/imgWithBasePath";

export const metadata: Metadata = {
    title: `${pageProperties.name} - ${siteTitle}`,
};

const ComputerGradedTestMarker = (): JSX.Element => {
    return (
        <article className="main-article">
            <h1>{pageProperties.name}</h1>
            <p>{pageProperties.description}</p>

            <h2>スクリーンショット</h2>
            <div className="flex w-full flex-col gap-y-3">
                <div className="w-2/3">
                    <ImgWithBasePath src="/works/cgtm/screenshot1.png" alt="スクリーンショット1" />
                </div>
                <div className="w-2/3">
                    <ImgWithBasePath src="/works/cgtm/screenshot2.png" alt="スクリーンショット2" />
                </div>
                <div className="w-2/3">
                    <ImgWithBasePath src="/works/cgtm/screenshot3.png" alt="スクリーンショット3" />
                </div>
                <div className="w-2/3">
                    <ImgWithBasePath src="/works/cgtm/screenshot4.png" alt="スクリーンショット4" />
                </div>
            </div>

            <h2>機能</h2>
            <ul>
                <li>受験者の解答を入力するだけで、採点・志望校判定が自動で行われ成績表を出力できる</li>
                <li>入力から出力まで全てGUI上で行える</li>
                <li>解答入力をスムーズに行えるように、Enterキーだけで次のセルに自動でフォーカスする機能を搭載</li>
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
                </tbody>
            </table>
        </article>
    );
};

export default ComputerGradedTestMarker;
