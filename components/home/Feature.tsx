const KEY_FEATURES = [
  { title: "服务端渲染 (SSR)", content: "提高首屏加载速度，改善SEO。" },
  { title: "静态网站生成 (SSG)", content: "生成静态HTML页面，提升性能和SEO。" },
  {
    title: "文件系统路由",
    content: "基于文件目录自动创建路由。",
  },
  { title: "API路由", content: "简化全栈开发。" },
  { title: "CSS支持", content: "支持各种 CSS 解决方案。" },
  { title: "图像优化", content: "自动优化图像加载，提升页面性能。" },
];

const Feature = () => {
  return (
    <section className="w-full flex flex-col items-center gap-4 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <h2 className="sm:text-4xl text-3xl font-bold text-slate-900 mx-auto">
        主要特性
      </h2>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {KEY_FEATURES.map((i) => {
          return (
            <div
              key={i.title}
              className="relative overflow-hidden rounded-lg border bg-background p-2"
            >
              <div className="flex flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold">{i.title}</h3>
                  <p className="text-sm text-muted-foreground">{i.content}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Feature;
