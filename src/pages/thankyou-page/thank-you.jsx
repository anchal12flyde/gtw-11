"use client";
import Link from "next/link";
import Head from "next/head";

export default function ThankYouPage() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <div className="min-h-screen flex flex-col justify-start sm:justify-center items-center bg-white-color1 text-center gap-4 pt-28 sm:pt-0">
        <h1 className="text-4xl sm:text-7xl font-semibold text-primary">
          THANK YOU
        </h1>
        <h2 className="text-4xl sm:text-7xl font-semibold text-secondary">
          FOR SUBMITTING
        </h2>
        <p className="text-secondary mt-4">We’ll get back to you!</p>
        <Link
          href="/"
          className="text-primary underline hover:opacity-80 transition-opacity"
        >
          Back to home
        </Link>
      </div>
    </>
  );
}
