import { auth, provider } from "../firebase";
export function SignInAPI() {
  return (_dispatch) => {
    auth
      .SignInWithPopup(provider)
      .then((payload) => {
        console.log(payload);
      })
      .catch((error) => alert(error.message));
  };
}
