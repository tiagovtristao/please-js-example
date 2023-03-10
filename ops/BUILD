subinclude("//ops/build_defs:ts_project")

ts_project(
    # `:index` is the default entry but can be overridden/extended below
    entry_points = [":index"],
    # `CONFIG.JS.TSCONFIG` is the default config but can be overridden below
    tsconfig = CONFIG.JS.TSCONFIG,
)

ts_module(
    name = "index",
    src = "index.tsx",
    deps = [
        "//third_party/js:react",
        "//third_party/js:react-dom",
        "//ops/src:page",
    ],
    visibility = ["PUBLIC"]
)

esbuild_bundle(
    name = "bundle",
    entry_point = ":index",
    plugins = [
        "//build/js:esbuild_sass_plugin",
    ],
)

