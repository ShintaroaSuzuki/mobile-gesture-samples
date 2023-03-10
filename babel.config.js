module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module-resolver",
                {
                    alias: {
                        "@/screens": "./src/screens",
                        "@/components": "./src/components",
                        "@/navigations": "./src/navigations",
                        "@/hooks": "./src/hooks",
                        "@/utils": "./src/utils",
                        "@/styles": "./src/styles",
                        "@/__mocks__": "./__mocks__",
                    },
                },
            ],
            "react-native-reanimated/plugin",
        ],
    };
};
