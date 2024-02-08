/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js"
  serverDependenciesToBundle: [
    "@packages/ui",
    "@packages/ts",
    "@packages/eslint",
  ],
  watchPaths: async () => {
    return ["./../../packages/ui/src", "./../../packages/ts", "./../../packages/eslint"];
  },
};
