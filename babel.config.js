module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            src: "./src",
            assets: "./src/assets",
            images: "./src/assets/images",
            components: "./src/components",
            constants: "./src/constants",
            context: "./src/context",
            hooks: "./src/hooks",
            navigation: "./src/navigation",
            screens: "./src/screens",
            utils: "./src/utils",
          },
        },
      ],
    ],
  };
};
