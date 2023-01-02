const isProd = process.env.NODE_ENV === "production";

module.exports = {
  swcMinify: true,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  pwa: {
    dest: "public",
    disable: !isProd,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: { icon: true },
        },
      ],
    });
    return config;
  },
};
