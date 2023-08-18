import Icon from "./icon";
import pt from "prop-types";
import Popup from "./Popup";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import { apiEditUser } from "@/api/auth";
import CloseCircle from "./icon/CloseCircle";
import { handleError } from "@/utils/handleError";
import { useMutation } from "@tanstack/react-query";

function ChangePassword({ show, onClose }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const changePassword = useMutation({
    mutationFn: apiEditUser,
    onError: handleError,
    onSuccess: onClose,
  });

  const submit = () => {
    if (password !== confirmPassword) {
      alert("رمز عبور تکرار شده با رمز عبور اصلی مطابقت ندارد");
      return;
    }

    changePassword.mutate({ password });
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
          <Input
            label="رمز  عبور جدید"
            value={password}
            onChange={setPassword}
            className="mt-8"
            type="password"
          />

          <Input
            label="تکرار رمز عبور"
            value={confirmPassword}
            onChange={setConfirmPassword}
            className="mt-4"
            type="password"
          />

          <Button
            className="w-full mt-12"
            label="تغییر رمز عبور"
            loading={changePassword.isLoading}
            disabled={!password || !confirmPassword}
            onClick={submit}
          />
          <Button
            className="w-full mt-4 mb-12"
            variant="transparent"
            label="انصراف"
            onClick={onClose}
          />
        </>
      </Popup>
    )
  );
}

ChangePassword.propTypes = {
  show: pt.bool,
  onClose: pt.func,
};

export default ChangePassword;
