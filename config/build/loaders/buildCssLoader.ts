import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import sass from 'sass';

export function buildCssLoader(isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },
      {
        loader: 'sass-loader',
        options: {
          api: 'modern',
          implementation: sass,
          sassOptions: {
          },
        },
      },
    ],
  };
}
