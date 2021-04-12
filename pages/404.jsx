import Link from "next/link";

const Custom404Page = () => {
  return (
    <>
      <div className="h-screen w-screen bg-yellow-300 flex justify-center content-center flex-wrap">
        <p className="font-sans text-gray-600 error-text text-8xl">404</p>
      </div>
      <div className="absolute w-screen bottom-0 mb-6 text-center text-xl">
        <span className="opacity-90 text-gray-800">Take me back to&nbsp;</span>
        <Link href="/">
          <a className="border-b text-gray-700">
            the grocery store
          </a>
        </Link>
      </div>
    </>
  );
}

export default Custom404Page;