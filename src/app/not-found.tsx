import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="mx-auto grid min-h-[70vh] max-w-xl place-items-center px-5 text-center">
      <div>
        <p className="gradient-text font-heading text-8xl font-bold sm:text-9xl">404</p>
        <h1 className="mt-4 text-2xl font-semibold sm:text-3xl">This page took a wrong turn</h1>
        <p className="mt-3 text-muted">The page you are looking for does not exist or has been moved.</p>
        <Link href="/" className="btn-primary mt-8">
          <FiArrowLeft /> Back to home
        </Link>
      </div>
    </div>
  );
}
