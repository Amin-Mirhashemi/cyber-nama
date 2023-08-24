import { useRef } from "react";
import { useState } from "react";
import Comments from "./Comments";
import moment from "moment-jalaali";
import Icon from "@/components/icon";
import Like from "@/components/icon/Like";
import useMobileDetect from "@/hooks/screen-size";
import Maximize from "@/components/icon/Maximize";
import { apiGetPost, apiLike, apiUnLike } from "@/api/posts";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function Live() {
  const { data } = useQuery({
    queryKey: ["get-post"],
    queryFn: apiGetPost,
  });

  const isMobile = useMobileDetect();

  const splittedContent = data?.data?.text.split("%%%");
  const title = splittedContent?.[0] || "لطفا شکیبا باشید ...";
  const subTitle = splittedContent?.[1] || "";

  const video = useRef(null);

  const toggleFullScreen = () => {
    var el = video.current;

    if (!el) return;

    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    } else if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    }
  };

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLiked(data?.data?.is_liked_by_current_user);
  }, [data?.data?.is_liked_by_current_user]);

  const like = useMutation({
    mutationFn: apiLike,
  });

  const unlike = useMutation({
    mutationFn: apiUnLike,
  });

  const toggleLike = () => {
    if (isLiked) {
      unlike.mutate();
    } else {
      like.mutate();
    }

    setIsLiked((prev) => !prev);
  };

  return (
    <div className="grid md:grid-cols-3 md:px-6">
      <div className="md:col-span-2 md:px-2">
        {data?.data?.image && (
          <>
            <div className="relative w-full">
              <video
                className="w-full"
                ref={video}
                src={data.data.image}
                autoPlay={data.data.publishTime < Date.now()}
                controls={false}
              />

              {data.data.publishTime > Date.now() ? (
                <div className="w-full h-full bg-black/50 flex items-center flex-col gap-6 text-[32px] absolute top-0 right-0 justify-center">
                  <b>پخش در</b>
                  {moment(data.data.publishTime).format("jDD jMMMM ساعت HH:mm")}
                </div>
              ) : (
                <div className="absolute bottom-4 w-full px-6">
                  <div className="w-full h-[3px] bg-primary" />

                  <div className="flex items-center gap-4 mt-[18px]">
                    <Icon onClick={toggleFullScreen}>
                      <Maximize />
                    </Icon>
                    <Icon onClick={toggleLike}>
                      <Like color={isLiked ? "#FF0000" : "#F9F8FF"} />
                    </Icon>
                    <div className="bg-primary h-[28px] px-[10px] flex items-center rounded-md">
                      زنده
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {!!data?.data?.comments && isMobile && (
          <Comments comments={data.data.comments} />
        )}

        <b className="md:text-[32px] pt-[14px] pb-2 block">{title}</b>

        <div className="text-gray-light text-sm mb-3 md:text-md">
          {subTitle}
        </div>
      </div>
      <div className="md:col-span-1 md:px-2">
        {!!data?.data?.comments && !isMobile && (
          <Comments comments={data.data.comments} />
        )}
      </div>
    </div>
  );
}
