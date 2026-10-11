import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="container-main error-panel">
      <h1>Sale not found</h1>
      <p className="muted">This sale is unavailable.</p>
      <Link href="/" className="button-primary">
        Return to overview
      </Link>
    </main>
  );
}
