


import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {
    apiKey: "AIzaSyC9VK67GKhrErzrVlEzIivgONdEPdrRjE4",
    authDomain: "churchserviceorder.firebaseapp.com",
    databaseURL: "https://churchserviceorder.firebaseio.com",
    storageBucket: "churchserviceorder.appspot.com",
    messagingSenderId: "955365234722"
};



export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};