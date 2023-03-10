subinclude("//ops/build_defs:ts_project")

ts_module(
    name = "page",
    src = "Page.tsx",
    deps = [
        "//third_party/js:react",
        "//copperkey/components:button",
        ":page_sass"
    ],
    visibility = ["PUBLIC"],
)

ts_jest(
    name = "page_test",
    src = "Page.spec.ts",
    deps = [
        ":page",
    ]
)

filegroup(
    name = "page_sass",
    srcs = ["page.scss"],
    exported_deps = [
        "//copperkey:variables_sass",
    ],
    visibility = ["PUBLIC"],
)
