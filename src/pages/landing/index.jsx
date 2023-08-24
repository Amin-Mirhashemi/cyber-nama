import globe from "/globe.svg";
import { useContext } from "react";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import { apiGetPostLight } from "@/api/posts";
import { useQuery } from "@tanstack/react-query";
import useMobileDetect from "@/hooks/screen-size";
import { LayoutProvider } from "@/components/Layout";
import { AuthContext } from "@/providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const calculateRemainingTime = (timestamp, prev) => {
  if (!timestamp) return prev;

  const now = new Date().getTime();
  const timeDifference = Math.max(0, timestamp - now);
  const seconds = Math.floor((timeDifference / 1000) % 60);
  const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
  const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
};

export default function Landing() {
  const { data } = useQuery({
    queryFn: apiGetPostLight,
    queryKey: ["post-light"],
  });

  const navigate = useNavigate();

  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const isMobile = useMobileDetect();

  const publishTime = data?.data?.publishTime;

  useEffect(() => {
    setRemainingTime((prev) => calculateRemainingTime(publishTime, prev));

    const interval = setInterval(() => {
      setRemainingTime((prev) => calculateRemainingTime(publishTime, prev));
    }, 1000);

    return () => clearInterval(interval);
  }, [publishTime]);

  const openLoginModal = useContext(LayoutProvider);

  const { isLoggedIn } = useContext(AuthContext);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      navigate("/live");
    } else {
      openLoginModal();
    }
  };

  const title = data?.data?.text.split("%%%")[0] || "لطفا شکیبا باشید ...";

  return (
    <div className="relative p-6 sm:p-20 min-h-[765px] max-h-full w-full md:columns-2 lg:columns-3 columns-1">
      <div className="pt-20 overflow-hidden">
        <b className="text-5xl">{title}</b>

        {remainingTime && (
          <div className="flex items-center justify-around items-stretch mt-12">
            <div className="flex flex-col items-center w-14">
              <b className="text-4xl">{remainingTime.seconds}</b>
              <span className="text-xl">ثانیه</span>
            </div>
            <div className="w-px bg-gradient-to-b from-black via-primary to-black" />
            <div className="flex flex-col items-center w-14">
              <b className="text-4xl">{remainingTime.minutes}</b>
              <span className="text-xl">دقیقه</span>
            </div>
            <div className="w-px bg-gradient-to-b from-black via-primary to-black" />
            <div className="flex flex-col items-center w-14">
              <b className="text-4xl">{remainingTime.hours}</b>
              <span className="text-xl">ساعت</span>
            </div>
            <div className="w-px bg-gradient-to-b from-black via-primary to-black" />
            <div className="flex flex-col items-center w-14">
              <b className="text-4xl">{remainingTime.days}</b>
              <span className="text-xl">روز</span>
            </div>
          </div>
        )}

        <Button
          className="mt-12 w-full"
          label="مشاهده بیشتر"
          variant="transparent"
          onClick={handleButtonClick}
          disabled={!data?.data?.text}
        />
      </div>
      {!isMobile && <img src={globe} className="absolute left-20 top-20" />}
    </div>
  );
}
