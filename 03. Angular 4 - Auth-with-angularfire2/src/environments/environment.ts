// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAOO8GtbxAOAnxya57rSY8A_Sn0R-vA5Ro",
    authDomain: "auth-with-angularfire2.firebaseapp.com",
    databaseURL: "https://auth-with-angularfire2.firebaseio.com",
    projectId: "auth-with-angularfire2",
    storageBucket: "auth-with-angularfire2.appspot.com",
    messagingSenderId: "682394169369"

  }
};
