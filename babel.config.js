module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            src: "./src",
            components: "./src/components",
            constants: "./src/constants",
            context: "./src/context",
            hooks: "./src/hooks",
            navigation: "./src/navigation",
            screens: "./src/screens",
          },
        },
      ],
    ],
  };
};
