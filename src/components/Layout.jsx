import clsx from "clsx";
import Icon from "./icon";
import pt from "prop-types";
import Menu from "./icon/Menu";
import User from "./icon/User";
import mainIcon from "/icon.svg";
import UserCircle from "./icon/UserCircle";
import { useContext, useState } from "react";
import useMobileDetect from "@/hooks/screen-size";
import { AuthContext } from "@/providers/AuthProvider";
import Login from "./Login";

function Layout({ children }) {
  const { isLoggedIn } = useContext(AuthContext);

  const isMobile = useMobileDetect();

  const [isShowMenu, setShowMenu] = useState(false);
  const [isShowLoginModal, setShowLoginModal] = useState(false);

  const handleIconClick = () => {
    if (!isMobile && !isLoggedIn) {
      setShowLoginModal(true);
    }
  };

  return (
    <>
      <div className="w-full sm:py-6 sm:px-12 p-4 flex gap-4 items-center">
        <img src={mainIcon} className="w-8 sm:w-fit" />

        {!isMobile && (
          <>
            <span>خانه</span>
            <span>سایبرنما</span>
          </>
        )}

        <Icon
          onClick={handleIconClick}
          className="mr-auto flex gap-2 text-white items-center"
        >
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
      </div>
      {children}
      <Login show={isShowLoginModal} onClose={() => setShowLoginModal(false)} />
    </>
  );
}

Layout.propTypes = {
  children: pt.element.isRequired,
};

export default Layout;
