import { cva } from "class-variance-authority";
export const saleCardVariants = cva(
  "relative py-5.5 px-5.5 border border-[var(--rust)] bg-[#0b0303] [filter:drop-shadow(0_0_61.3px_#ff45091c)] w-full max-[1151px]:py-4.5 max-[1151px]:px-4.5",
  {
    variants: {
      step: {
        overview: "h-[325px] max-[1001px]:h-auto max-[1001px]:min-h-[325px]",
        ready: "h-auto min-h-67",
        select: "min-h-94 max-[761px]:min-h-94",
        breakdown: "min-h-[551px] max-[951px]:min-h-0",
        quote:
          "min-h-[663px] [&_.participation-rows]:mt-4 [&_.participation-rows_>_div]:min-h-8.5 [&_>_.framed-button]:mt-4 [&_>_.framed-button]:py-[7px] [&_>_.framed-button]:px-[7.605px] [&_>_.framed-button_>_button]:h-11 [&_>_.framed-button_>_button]:text-[14px] max-[761px]:[&_.amount-line_>_input]:text-[48px]",
        review: "min-h-[697px] max-[511px]:min-h-0 @max-[441px]:min-h-0",
        dual: "",
        complete: "",
      },
    },
  },
);
