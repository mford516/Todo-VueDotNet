import OktaAuth from '@okta/okta-auth-js'

const org = 'https://dev-450622.oktapreview.com',
      clientId = '0oadchv2cqiUDEXYw0h7',
      redirectUri = 'http://localhost:5000',
      authorizationServer = 'default'

const oktaAuthClient = new OktaAuth({
  url: org,
  issuer: authorizationServer,
  clientId,
  redirectUri
})

export default {
  client: oktaAuthClient
}