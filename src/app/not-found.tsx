import Link from "next/link";
export default function NotFoundPage() {
  return (
    <main
      className={
        "w-[min(var(--content),_calc(100%_-_64px))] mx-auto max-[761px]:w-[calc(100%_-_36px)] mt-12.5 py-[35px] px-[35px] border border-[var(--rust)] max-w-172.5 bg-surface [&_h1]:text-[26px] [&_h1]:mt-5 [&_p]:text-[13px] [&_p]:my-4.5 [&_p]:mx-0"
      }
    >
      <h1>Sale not found</h1>
      <p className={"muted text-muted"}>This sale is unavailable.</p>
      <Link
        href="/"
        className={
          "flex items-center justify-center gap-2 rounded-none py-2 px-6 min-h-11 text-[14px] font-medium text-white [transition:background_0.15s] bg-orange border border-[var(--orange)] [&:hover:not(:disabled)]:[background:var(--orange-hover)] [&:disabled]:bg-[#ff450980] [&:disabled]:[border-color:transparent] [@media(hover:_none)]:[&:hover:not(:disabled)]:bg-orange"
        }
      >
        Return to overview
      </Link>
    </main>
  );
}
