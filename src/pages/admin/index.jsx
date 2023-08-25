import moment from "moment-jalaali";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { apiUpload } from "@/api/upload";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleError } from "@/utils/handleError";
import { apiGetPostLight, apiEditPost } from "@/api/posts";
import { useQuery, useMutation } from "@tanstack/react-query";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [source, setSource] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const { data } = useQuery({
    queryFn: apiGetPostLight,
    queryKey: ["post-light"],
  });

  const navigate = useNavigate();

  const updatePost = useMutation({
    mutationFn: apiEditPost,
    onSuccess: () => window.location.replace("/"),
    onError: handleError,
  });

  const upload = useMutation({
    mutationFn: apiUpload,
    onError: handleError,
    onSuccess: (res) => setSource(res.data.location),
  });

  useEffect(() => {
    const postData = data?.data;

    if (!postData) return;

    const text = postData.text.split("%%%");

    setTitle(text[0]);
    setSubTitle(text[1]);
    setSource(postData.image);

    const dateTime = moment(postData.publishTime)
      .format("jYYYY/jMM/jDD HH:mm")
      .split(" ");

    setDate(dateTime[0]);
    setTime(dateTime[1]);
  }, [data?.data]);

  const splittedDate = date.split("/");

  const handleDateChange = (value, index) => {
    const temp = [...splittedDate];
    temp[index] = value;
    setDate(temp.join("/"));
  };

  const handleUpload = (e) => {
    const body = new FormData();
    body.append("file", e.target.files[0]);
    upload.mutate(body);
  };

  const handleUpdate = () => {
    const dateTime = moment(`${date} ${time}`, "jYYYY/jMM/jDD HH:mm");

    if (!dateTime.isValid()) {
      alert("invalid date");
      return;
    }

    updatePost.mutate({
      id: data.data._id,
      text: `${title} %%% ${subTitle}`,
      image: source,
      publishTime: new Date(dateTime.format("YYYY/MM/DD HH:mm")).getTime(),
    });
  };

  return (
    <div className="w-full max-w-[700px] px-12 flex items-stretch flex-col gap-6 mx-auto">
      <b className="text-3xl">ادمین</b>
      <Input label="عنوان لایو" value={title} onChange={setTitle} />
      <Input
        label="توضیحات لایو"
        type="textarea"
        value={subTitle}
        onChange={setSubTitle}
      />

      <h6 className="w-full">زمان پخش</h6>
      <div className="flex items-center gap-4">
        <Input label="ساعت" value={time} onChange={setTime} />
        <Input
          label="روز"
          value={splittedDate[2]}
          onChange={(val) => handleDateChange(val, 2)}
        />
        <Input
          label="ماه"
          value={splittedDate[1]}
          onChange={(val) => handleDateChange(val, 1)}
        />
        <Input
          label="سال"
          value={splittedDate[0]}
          onChange={(val) => handleDateChange(val, 0)}
        />
      </div>

      <Input
        label="آدرس ویدیو (در صورت نیاز آدرس مستقیم وارد کنید یا یک فایل جدید آپلود کنید.)"
        value={source}
        onChange={setSource}
      />

      <div className="flex justify-end gap-8">
        {upload.isLoading && "در حال بارگزاری، لطفا شکیبا باشید ..."}
        {upload.isSuccess && "آپلود با موفقیت انجام شد"}
        <input type="file" onChange={handleUpload} accept="video/*" />
      </div>

      <Button
        label="ذخیره"
        onClick={handleUpdate}
        loading={updatePost.isLoading}
      ></Button>
      <Button
        label="انصراف"
        variant="transparent"
        onClick={() => navigate("/")}
      ></Button>
    </div>
  );
}
