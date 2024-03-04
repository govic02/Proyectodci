import pkg from 'forge-apis';
const { AuthClientTwoLegged } = pkg;
import config from '../config.js'
/**
 * Initializes a Forge client for 2-legged authentication.
 * @param {string[]} scopes List of resource access scopes.
 * @returns {AuthClientTwoLegged} 2-legged authentication client.
 */
export function getClient(scopes) {
    const { client_id, client_secret } = config.credentials;
    return new AuthClientTwoLegged(client_id, client_secret, scopes || config.scopes.internal);
}

let cache = {};
async function getToken(scopes) {
    const key = scopes.join('+');
    if (cache[key]) {
        return cache[key];
    }
    const client = getClient(scopes);
    let credentials = await client.authenticate();
    cache[key] = credentials;
    setTimeout(() => { delete cache[key]; }, credentials.expires_in * 1000);
    return credentials;
}

/**
 * Retrieves a 2-legged authentication token for preconfigured public scopes.
 * @returns Token object: { "access_token": "...", "expires_at": "...", "expires_in": "...", "token_type": "..." }.
 */
export async function getPublicToken() {
    return getToken(config.scopes.public);
}

/**
 * Retrieves a 2-legged authentication token for preconfigured internal scopes.
 * @returns Token object: { "access_token": "...", "expires_at": "...", "expires_in": "...", "token_type": "..." }.
 */
export async function getInternalToken() {
    return getToken(config.scopes.internal);
}

export function Token(session) {
    this._session = session;
}

Token.prototype.getOAuth = function () {
    return this._session.oAuth;
};

Token.prototype.setOAuth = function (oAuth) {
    this._session.oAuth = oAuth;
};

Token.prototype.getCredentials = function () {
    return this._session.credentials;
};

Token.prototype.setCredentials = function (credentials) {
    this._session.credentials = credentials;
};

