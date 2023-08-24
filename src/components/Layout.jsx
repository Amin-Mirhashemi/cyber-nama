import Icon from "./icon";
import pt from "prop-types";
import Menu from "./icon/Menu";
import User from "./icon/User";
import mainIcon from "/icon.svg";
import UserCircle from "./icon/UserCircle";
import { useNavigate } from "react-router-dom";
import useMobileDetect from "@/hooks/screen-size";
import { AuthContext } from "@/providers/AuthProvider";
import { useContext, useState, useRef, createContext } from "react";

import Login from "./Login";
import UserMenu from "./UserMenu";
import ChangePassword from "./ChangePassword";

export const LayoutProvider = createContext(null);

function Layout({ children }) {
  const { isLoggedIn } = useContext(AuthContext);

  const isMobile = useMobileDetect();

  const navigate = useNavigate();

  const [isShowMenu, setShowMenu] = useState(false);
  const [isShowLoginModal, setShowLoginModal] = useState(false);
  const [isShowPasswordModal, setShowPasswordModal] = useState(false);

  const handleIconClick = () => {
    if (!isMobile && !isLoggedIn) {
      setShowLoginModal(true);
    } else {
      setShowMenu(true);
    }
  };

  const openLoginModal = () => {
    setShowMenu(false);

    setTimeout(() => {
      setShowLoginModal(true);
    }, 100);
  };

  const openPasswordModal = () => {
    setShowMenu(false);

    setTimeout(() => {
      setShowPasswordModal(true);
    }, 100);
  };

  const userMenuIcon = useRef(null);

  const goHome = () => {
    navigate("/");
  };

  const handleLiveClick = () => {
    if (isLoggedIn) {
      navigate("/live");
    } else {
      setShowLoginModal(true);
    }
  };

  return (
    <>
      <div className="w-full sm:py-6 sm:px-12 p-4 flex gap-4 items-center">
        <img
          src={mainIcon}
          className="w-8 sm:w-fit cursor-pointer"
          onClick={goHome}
        />

        {!isMobile && (
          <>
            <span className="cursor-pointer" onClick={goHome}>
              خانه
            </span>
            <span className="cursor-pointer" onClick={handleLiveClick}>
              سایبرنما
            </span>
          </>
        )}

        <span ref={userMenuIcon} className="mr-auto">
          <Icon onClick={handleIconClick} className="flex gap-2 items-center">
            {isMobile ? (
              <Menu />
            ) : isLoggedIn ? (
              <UserCircle />
            ) : (
              <>
                <User />
                ورود و ثبت‌نام
              </>
            )}
          </Icon>
        </span>
      </div>

      <LayoutProvider.Provider value={openLoginModal}>
        {children}
      </LayoutProvider.Provider>

      <Login show={isShowLoginModal} onClose={() => setShowLoginModal(false)} />

      <UserMenu
        show={isShowMenu}
        onClose={() => setShowMenu(false)}
        anchor={userMenuIcon.current}
        openLoginModal={openLoginModal}
        openPasswordModal={openPasswordModal}
      />

      <ChangePassword
        show={isShowPasswordModal}
        onClose={() => setShowPasswordModal(false)}
      />
    </>
  );
}

Layout.propTypes = {
  children: pt.element.isRequired,
};

export default Layout;
