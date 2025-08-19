import { useRef } from "react";

export function AddWebShortcut_Body({onButtonClick}) {
  const siteNameRef = useRef();
  const siteUrlRef = useRef();

  const handleClick = () => {
    const webname= siteNameRef.current.value
    const url= siteUrlRef.current.value
    onButtonClick({webname, url})
  };

  return (
    <div className="bg-teal-900 flex flex-col items-center justify-center w-full h-full p-5">
      <input
        type="text"
        placeholder="Enter website Name"
        ref={siteNameRef}
        className="bg-gray-200 w-full text-2xl border border-gray-700 rounded-md p-3 m-2"
      />

      <input
        type="url"
        placeholder="Enter website URL"
        ref={siteUrlRef}
        className="bg-gray-200 w-full text-2xl border border-gray-700 rounded-md p-3 m-2"
      />

      <button
        onClick={handleClick}
        className="bg-gray-800 text-[25px] text-white  p-2 rounded-2xl active:invert transition duration-300 ease"
      >
        Click
      </button>
    </div>
  );
}
