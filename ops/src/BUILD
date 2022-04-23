ts_module(
    name = "page",
    src = "Page.tsx",
    deps = [
        "//third_party/js:react",
        "//copperkey",
        ":page_sass"
    ],
    visibility = ["//ops/..."]
)

jest(
    name = "page_test",
    src = "Page.spec.ts",
    deps = [
        ":page",
    ]
)

sass_file(
    name = "page_sass",
    src = "page.scss",
    deps = [
        "//copperkey:variables_sass",
    ],
    visibility = ["PUBLIC"],
)
