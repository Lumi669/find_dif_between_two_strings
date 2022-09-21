// Find Difference Between Two String
function findDiff(str1, str2) {
  let diff = "";
  str2.split("").forEach(function (val, i) {
    if (val != str1.charAt(i)) diff += val;
  });
  return diff;
}

const string1 = `Hello "World"`;
const string2 = `Hello "world."`;
if (string1 === string2) {
  console.log("Matching strings!");
} else {
  console.log("Strings do not match");
}

const d = findDiff(string1, string2);
console.log("d = ", d);

const teacherVersion = `const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist",
  },

  devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, "./"),
    },
    compress: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};`;

const myVersion = `const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./"),
    },
    compress: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
`;

const nosT = teacherVersion.replaceAll(/\s/g, "");
const myT = myVersion.replaceAll(/\s/g, "");

const dd = findDiff(nosT, myT);
console.log(" dd = ", dd);
