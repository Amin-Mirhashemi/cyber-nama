import classNames from "clsx";
import PropTypes from "prop-types";
import { useEffect, useRef, useCallback, useMemo } from "react";

const Popup = ({
  children,
  position = "center",
  anchorElement,
  onClose,
  className,
}) => {
  const popupRef = useRef(null);

  const handleOutsideClick = useCallback(
    (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose?.();
      }
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose, handleOutsideClick]);

  const popupClasses = classNames(
    className,
    "fixed flex items-center justify-center z-50",
    "bg-opacity-40 bg-black backdrop-blur",
    "transition-opacity duration-300",
    "rounded-[14px] shadow-[0_0_46px_rgba(0,142,220,0.28)]",
    {
      "opacity-0 pointer-events-none": !children,
      "opacity-100 pointer-events-auto": children,
      "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2":
        position === "center",
    },
  );

  const positionStyles = useMemo(() => {
    if (anchorElement && position !== "center") {
      const { top, left, width, height } =
        anchorElement.getBoundingClientRect();
      if (position === "top") {
        return {
          top: top - popupRef.current.offsetHeight,
          left,
        };
      } else if (position === "right") {
        return {
          top,
          left: left + width,
        };
      } else if (position === "bottom") {
        return {
          top: top + height,
          left,
        };
      } else if (position === "left") {
        return {
          top,
          left: left - popupRef.current.offsetWidth,
        };
      }
    }
  }, [anchorElement, position]);

  return (
    <div className={popupClasses} ref={popupRef} style={positionStyles}>
      <div className="w-full">{children}</div>
    </div>
  );
};

Popup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func,
  position: PropTypes.string,
  anchorElement: PropTypes.instanceOf(Element),
};

export default Popup;
