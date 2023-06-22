export default ({ env }) => ({
	email: {
		config: {
			provider: "nodemailer",
			providerOptions: {
				host: env("SMTP_HOST"),
				port: env("SMTP_PORT"),
				auth: {
					user: env("SMTP_USERNAME"),
					pass: env("SMTP_PASSWORD"),
				},
			},
			settings: {
				defaultFrom: "memoir-noreply@apps.danang.id",
				defaultReplyTo: "memoir-dev@danang.id",
			},
		},
	},
	upload: {
		config: {
			provider: "aws-s3",
			providerOptions: {
				s3Options: {
					accessKeyId: env("AWS_ACCESS_KEY_ID"),
					secretAccessKey: env("AWS_ACCESS_SECRET"),
					region: env("AWS_REGION"),
					params: {
						Bucket: env("AWS_BUCKET"),
					},
				},
			},
			actionOptions: {
				upload: {},
				uploadStream: {},
				delete: {},
			},
		},
	},
});
