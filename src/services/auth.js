import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
import { GoogleSignin } from '@react-native-community/google-signin';

export const getFacebookUserInfo = async function () {
  return new Promise((resolve, reject) => {
    try {
      const infoRequest = new GraphRequest('/me', null, (err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      });
      new GraphRequestManager().addRequest(infoRequest).start();
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

export const facebookLogin = async function () {
  try {
    let data = await AccessToken.getCurrentAccessToken();
    if (!data || !data.accessToken) {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (!result.isCancelled) {
        data = await AccessToken.getCurrentAccessToken();
      }
    }
    if (data && data.accessToken) {
      // ask for user info
      return getFacebookUserInfo();
    } else {
      // TODO show message if user cancel
    }
  } catch (err) {
    console.log(err);
  }
};

export const getGoogleUserInfo = function () {
  return GoogleSignin.getCurrentUser();
};

export const googleLogin = async function () {
  try {
    await GoogleSignin.hasPlayServices();
    const isSignedIn = await GoogleSignin.isSignedIn();

    const user = await (isSignedIn
      ? getGoogleUserInfo()
      : GoogleSignin.signIn());
    return user.user;
  } catch (err) {
    // TODO if user cancel, check status to see reasong
    console.log(err);
  }
};

export const logout = function (provider = '') {
  switch (provider.toLowerCase()) {
    case 'facebook':
      return LoginManager.logOut();
    case 'google':
      return GoogleSignin.signOut();
    default:
      return Promise.all([LoginManager.logOut(), GoogleSignin.signOut()]);
  }
};

export default {
  googleLogin,
  getGoogleUserInfo,
  facebookLogin,
  getFacebookUserInfo,
  logout,
};
