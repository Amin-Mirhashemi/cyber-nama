import pt from "prop-types";
import Popup from "./Popup";
import Icon from "./icon";
import Input from "./Input";
import Button from "./Button";
import Cookies from "js-cookie";
import { useContext, useState } from "react";
import CloseCircle from "./icon/CloseCircle";
import { apiLogin, apiSignup } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
import { AuthContext } from "@/providers/AuthProvider";
import { handleError } from "@/utils/handleError";

function Login({ show, onClose }) {
  const [mode, setMode] = useState(null);
  const { setIsLoggedIn, setUser } = useContext(AuthContext);

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = useMutation({
    mutationFn: apiLogin,
    onSuccess: (res) => {
      Cookies.set("token", res.data.access_token);
      setIsLoggedIn(true);
      onClose();
    },
    onError: handleError,
  });

  const handleLogin = () => {
    login.mutate({
      username: loginUsername,
      password: loginPassword,
    });
  };

  const [name, setName] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  // const [bio, setBio] = useState('')

  const signup = useMutation({
    mutationFn: apiSignup,
    onSuccess: (res) => {
      Cookies.set("token", res.data.access_token);
      setUser({
        name,
        username: signupUsername,
      });
      setIsLoggedIn(true);
      onClose();
    },
    onError: handleError,
  });

  const handleSignUp = () => {
    signup.mutate({
      name,
      username: signupUsername,
      password: signupPassword,
    });
  };

  return (
    show && (
      <Popup onClose={onClose} className="p-8 w-[578px] max-w-full">
        <>
          <div className="flex justify-end">
            <Icon onClick={onClose}>
              <CloseCircle />
            </Icon>
          </div>

          {!mode && (
            <div className="flex flex-col items-center px-16 pb-20">
              <b className="text-3xl mt-16 mb-20 overflow-hidden">
                به <span className="text-primary">سایبر تی‌ وی</span> خوش آمدید
              </b>
              حساب کاربری ندارید؟
              <Button
                className="w-full mt-3"
                label="ثبت نام"
                onClick={() => setMode("signUp")}
              />
              <div className="h-px w-full bg-gradient-to-r from-black via-primary to-black my-8" />
              قبلا ثبت نام کرده اید؟
              <Button
                className="w-full mt-3"
                label="ورود"
                variant="transparent"
                onClick={() => setMode("logIn")}
              />
            </div>
          )}

          {mode === "logIn" && (
            <>
              <Input
                label="نام کاربری"
                type="email"
                value={loginUsername}
                className="mt-8"
                onChange={setLoginUsername}
                placeholder="ایمیل شما"
              />

              <Input
                label="رمز عبور"
                value={loginPassword}
                onChange={setLoginPassword}
                className="mt-4"
                type="password"
              />

              <Button
                className="w-full mt-12"
                label="ورود"
                loading={login.isLoading}
                disabled={!loginUsername || !loginPassword}
                onClick={handleLogin}
              />
              <Button
                className="w-full mt-4 mb-12"
                variant="transparent"
                label="حساب ندارید؟"
                onClick={() => setMode("signUp")}
              />
            </>
          )}

          {mode === "signUp" && (
            <>
              <Input
                label="نام کاربری"
                type="email"
                value={signupUsername}
                className="mt-8"
                onChange={setSignupUsername}
                placeholder="ایمیل شما"
              />

              <Input
                label="رمز عبور"
                value={signupPassword}
                onChange={setSignupPassword}
                className="mt-4"
                type="password"
              />

              <Input
                label="نام و نام خانوادگی"
                value={name}
                onChange={setName}
                className="mt-4"
                placeholder="نامی که به دیگران نمایش داده می‌شود"
              />

              <Button
                className="w-full mt-12"
                label="ثبت نام"
                loading={signup.isLoading}
                disabled={!signupPassword || !signupUsername}
                onClick={handleSignUp}
              />
              <Button
                className="w-full mt-4 mb-12"
                variant="transparent"
                label="حساب کاربری دارید؟"
                onClick={() => setMode("logIn")}
              />
            </>
          )}
        </>
      </Popup>
    )
  );
}

Login.propTypes = {
  show: pt.bool.isRequired,
  onClose: pt.func.isRequired,
};

export default Login;
