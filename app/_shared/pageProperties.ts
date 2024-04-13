type PageProperty = {
    readonly path: string;
    readonly name: string;
    readonly description: string;
};

// temporary
export const getWorks = (): PageProperty[] => [
    {
        path: "/works/slide",
        name: "Slide",
        description: "簡易エクスプローラー機能を搭載した画像ビューアー（Windows用デスクトップアプリ）",
    },
    {
        path: "/works/slide",
        name: "MultiTimer",
        description: "複数のアラーム付きタイマーを動かせられるWindowsデスクトップアプリ",
    },
];
