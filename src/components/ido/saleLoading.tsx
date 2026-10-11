export function SaleLoading() {
  return (
    <div
      className="container-main hero-inner hero-columns animate-pulse"
      aria-label="Loading sale data"
      role="status"
    >
      <div className="space-y-5">
        <div className="skeleton w-1/3 h-8" />
        <div className="skeleton w-4/5 h-14" />
        <div className="skeleton w-full h-5" />
        <div className="skeleton w-full h-72 mt-7" />
      </div>
      <div className="skeleton w-full h-[350px]" />
    </div>
  );
}
