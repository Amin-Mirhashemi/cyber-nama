import Icon from "./icon";
import pt from "prop-types";
import Popup from "./Popup";
import Avatar from "/avatar.svg";
import { useContext } from "react";
import Login from "./icon/Login";
import Logout from "./icon/Logout";
import Key from "./icon/Key";
import Video from "./icon/Video";
import Home from "./icon/Home";
import CloseCircle from "./icon/CloseCircle";
import { AuthContext } from "@/providers/AuthProvider";
import useMobileDetect from "@/hooks/screen-size";
import Cookies from "js-cookie";

function UserMenu({
  show,
  onClose,
  openLoginModal,
  anchor,
  openPasswordModal,
}) {
  const { isLoggedIn, user, setIsLoggedIn, setUser } = useContext(AuthContext);

  const isMobile = useMobileDetect();

  const logOut = () => {
    Cookies.remove("token");
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    show && (
      <Popup
        anchorElement={anchor}
        position={!isMobile ? "bottom" : "center"}
        onClose={onClose}
        className="w-screen h-screen sm:w-[310px] sm:h-[306px] p-6"
      >
        {isMobile && (
          <div className="flex justify-end">
            <Icon onClick={onClose}>
              <CloseCircle />
            </Icon>
          </div>
        )}

        <div className="flex flex-col items-center overflow-hidden gap-6 my-4 font-bold">
          <img src={Avatar} alt="avatar" />
          {user ? user.username : "کاربر مهمان"}
        </div>

        {isMobile && (
          <>
            <Icon className="flex items-center gap-2 py-4">
              <Home />
              خانه
            </Icon>
            <Icon className="flex items-center gap-2 py-4">
              <Video />
              سایبر نما
            </Icon>
          </>
        )}

        {isLoggedIn ? (
          <>
            <Icon
              className="flex items-center gap-2 py-4"
              onClick={openPasswordModal}
            >
              <Key />
              تغییر رمز عبور
            </Icon>
            <Icon className="flex items-center gap-2 py-4" onClick={logOut}>
              <Logout />
              خروج از حساب کاربری
            </Icon>
          </>
        ) : (
          <Icon
            className="flex items-center gap-2 py-4"
            onClick={openLoginModal}
          >
            <Login />
            ورود / ثبت نام
          </Icon>
        )}
      </Popup>
    )
  );
}

UserMenu.propTypes = {
  show: pt.bool,
  onClose: pt.func,
  openLoginModal: pt.func,
  openPasswordModal: pt.func,
  anchor: pt.element,
};

export default UserMenu;
