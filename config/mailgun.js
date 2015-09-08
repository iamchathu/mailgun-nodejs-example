var mailgunConfig = {
//Your api key, from Mailgun’s Control Panel
api_key : process.env.API_KEY ||'YOUR_API_KEY',

//Your domain, from the Mailgun Control Panel
domain : process.env.DOMAIN || 'yourdomain.me',

//Your sending email address
from_who : process.env.FROM_WHO || 'you@yourdomain.me'
}

module.exports  = mailgunConfig;
