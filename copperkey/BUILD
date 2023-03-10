subinclude("//copperkey/build_defs:ts_project")

ts_project()

ts_module(
    name = "index",
    src = "index.ts",
    deps = [
        "//copperkey/components:button",
    ],
    visibility = ["PUBLIC"]
)


filegroup(
    name = "base_sass",
    srcs = ["base.scss"],
    visibility = ["PUBLIC"],
)

filegroup(
    name = "variables_sass",
    srcs = ["variables.scss"],
    visibility = ["PUBLIC"],
)
