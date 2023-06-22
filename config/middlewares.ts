export default ({ env }) => [
	"strapi::errors",
	{
		name: "strapi::security",
		config: {
			contentSecurityPolicy: {
				useDefaults: true,
				directives: {
					"connect-src": ["'self'", "https:"],
					"img-src": [
						"'self'",
						"data:",
						"blob:",
						"market-assets.strapi.io",
						`memoir-content${
							env("NODE_ENV") !== "production" ? "-dev" : ""
						}.s3.ap-southeast-3.amazonaws.com`,
					],
					"media-src": [
						"'self'",
						"data:",
						"blob:",
						"market-assets.strapi.io",
						`memoir-content${
							env("NODE_ENV") !== "production" ? "-dev" : ""
						}.s3.ap-southeast-3.amazonaws.com`,
					],
					upgradeInsecureRequests: null,
				},
			},
		},
	},
	"strapi::cors",
	"strapi::poweredBy",
	"strapi::logger",
	"strapi::query",
	"strapi::body",
	"strapi::session",
	"strapi::favicon",
	"strapi::public",
];
