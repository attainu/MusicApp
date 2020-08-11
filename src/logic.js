//https://developer.spotify.com/documentation/web-api/

//Request =   // https://accounts.spotify.com/en/authorize?
//client_id=dcc1e1f2214d40acbcd901364c902200&
//redirect_uri=http:%2F%2Flocalhost:3000%2F&scope=user-read-playback-state%20user-modify-playback-state%20user-top-read%20user-read-recently-played%20user-read-currently-playing
//&response_type=token&show_dialog=true

//Response = http://localhost:3000/#access_token=BQCt5REjtMiJnpQuELM4hKVgVzkAJcarfEMOGc1IQQxray5X-6OlKFYedvlOm_xJAFRT8K4DUTgu9szBwCxAgGgoi5MjISWuuWAEmxvlvLICFQCwDjQWi8ymI7Vr3_c_b3sxbTW9sBgL8Sy2T1ab1kURuNS-nC25RM6OYOf3XmdqRMSUAP54
//&token_type=Bearer&expires_in=3600


//New API 
// 
export const authEndPoint = 'https://accounts.spotify.com/authorize';

const redirectURL = 'http://localhost:3000/';
const ClientID = 'dcc1e1f2214d40acbcd901364c902200';

const scopes = [
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-top-read',
    'user-read-recently-played',
    'user-read-currently-playing'
];

export const getTokenFromURL = () => {
    return window.location.hash.substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});

}



export const loginURL = `${authEndPoint}?client_id=${ClientID}&redirect_uri=${redirectURL}
&scope=${scopes.join("%20")}
&response_type=token&show_dialog=true`;