import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col justify-start sm:justify-center items-center bg-white text-center gap-4 pt-28 sm:pt-0">
  <h1 className="text-4xl sm:text-7xl font-semibold text-[#FFB100]">
    THANK YOU
  </h1>
  <h2 className="text-4xl sm:text-7xl font-semibold text-black">
    FOR SUBMITTING
  </h2>
  <p className="text-black mt-4">
    We’ll get back to you!
  </p>
  <Link
    href="/"
    className="text-[#FFB100] underline hover:opacity-80 transition-opacity"
  >
    Back to home
  </Link>
</div>

  );
}
