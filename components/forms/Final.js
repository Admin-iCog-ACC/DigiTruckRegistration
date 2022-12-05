import { useMutation } from "react-query";
import { useRouter } from "next/router";
import { acc } from "../../utils/api";
import React from "react";
import Link from "next/link";

export default function Final({ labels, locale }) {
  const { isLoading, data, error } = useMutation(acc);
  const router = useRouter();
  const { defaultLocale } = useRouter();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const handleRedirect = (e) => {
    e.preventDefault();
    router.push("/", { locale: defaultLocale });
  };
  if (isLoading)
    return <div className="flex justify-center">{labels.loading}</div>;
  return (
    <div className="container md:mt-10">
      {error ? (
        <div className="flex flex-col justify-center items-center">
          <p className="text-red-500">{error.response?.data?.message}</p>
          <button
            onClick={handleRedirect}
            className="h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100"
          >
            {labels.home}
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center ">
          <div className="wrapper h-16 w-16">
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>

          <div className="text-lg font-semibold text-gray-500">
            {labels.success}{" "}
          </div>
          <div className="mt-5 text-md font-semibold text-gray-500">
            {labels.consent_start}
            <a className="mt-5 text-blue-600 underline" href="https://drive.google.com/file/d/1NH4Tg4oT8yMrOcwmBsrxUnbwLC0TyStx/view?usp=share_link" target="_blank" rel="noopener noreferrer">{labels.consent_form}</a>
            {labels.consent_end}
          </div>
          <a className="mt-10">
            <button className="h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100">
              <Link href="/" locale={defaultLocale}>
                {labels.close}
              </Link>
            </button>
          </a>
        </div>
      )}
    </div>
  );
}
