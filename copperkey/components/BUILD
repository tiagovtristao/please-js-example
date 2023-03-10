subinclude("//copperkey/build_defs:ts_project")

ts_module(
    name = "button",
    src = "Button.tsx",
    deps = [
        "//copperkey:base_sass",
        ":tm_caps",
        "//third_party/js:lodash",
        "//third_party/js:react",
    ],
    visibility = ["PUBLIC"]
)

ts_module(
    name = "tm_caps",
    src = "TMCaps.js",
    deps = [
        "//third_party/js:lodash",
    ],
    visibility = ["PUBLIC"]
)

ts_jest(
    name = "button_test",
    src = "Button.spec.ts",
    deps = [
        ":button",
    ]
)

