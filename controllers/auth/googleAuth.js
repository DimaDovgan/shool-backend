const querystring = require('node:querystring');

//  const {GOOGLE_CLIENT_ID, BASE_URL} = process.env;

const googleAuth = async (req, res) => {
    console.log("foront is good and googleAuth")
    const stringifiedParams = querystring.stringify({
        client_id: process.env.GOOGLE_CLIENT_ID,
        redirect_uri: "http://localhost:3002/api/users/google-redirect",
        scope: [
            'https://www.googleapis.com/auth/userinfo.email',
            'https://www.googleapis.com/auth/userinfo.profile'
        ].join(' '),
        response_type: 'code',
        access_type: 'offline',
        prompt: 'consent'
    });

    console.log("stringifiedParams",stringifiedParams)

    return res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`);
}
// const googleAuth = async (req, res) => {
//     return res.json("dfhugdifgjdfg");
// }

module.exports = googleAuth;
