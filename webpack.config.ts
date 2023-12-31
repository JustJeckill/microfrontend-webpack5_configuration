import webpack from 'webpack';
import { buildWebpack } from "./config/build/buildWebpack";
import path from "path";
import { BuildPaths, EnvVariables } from "./config/build/types/types";

export default (env: EnvVariables) => {
    const { mode, port, analyzer, platform } = env;

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        public: path.resolve(__dirname, 'public'),
    };

    const options = {
        port: port ?? 3000,
        mode: mode ?? 'development',
        paths,
        analyzer,
        platform: platform ?? 'desktop',
    }

    const config: webpack.Configuration = buildWebpack(options);

    return config;
};
