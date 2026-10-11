import { Skeleton } from "@/components/ui/skeleton";

export function SaleLoading() {
  return (
    <div
      className="mx-auto grid min-h-204 w-[min(var(--content),calc(100%-64px))] grid-cols-[minmax(0,674fr)_minmax(0,712fr)] gap-0 pt-[19px] pb-[103px] max-[1001px]:min-h-0 max-[1001px]:grid-cols-1 max-[1001px]:gap-9 max-[1001px]:pb-15 max-[761px]:w-[calc(100%-36px)] max-[761px]:pt-[25px]"
      aria-label="Loading sale data"
      role="status"
    >
      <div className="space-y-5">
        <Skeleton className="h-8 w-1/3" />
        <Skeleton className="h-14 w-4/5" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="mt-7 h-72 w-full" />
      </div>
      <Skeleton className="h-87.5 w-full" />
    </div>
  );
}
