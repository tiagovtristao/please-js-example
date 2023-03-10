subrepo(
    name = "js",
    dep = build_rule(
        name = "js",
        system_srcs = ["/home/ttristao/playground/please-js"],
        cmd = "mv home/ttristao/playground/please-js $OUT",
        outs = ["js"],
        _subrepo = True,
    ),
    plugin = True,
)

filegroup(
    name = "jest_config",
    srcs = ["jest.config.js"],
    visibility = ["PUBLIC"],
)

filegroup(
    name = "tsconfig",
    srcs = ["tsconfig.json"],
    visibility = ["PUBLIC"],
)
