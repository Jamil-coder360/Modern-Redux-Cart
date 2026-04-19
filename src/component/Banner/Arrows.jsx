import { ArrowDown,  ArrowUp } from "lucide-react";

const Arrows = ({swiperRef}) => {
  return (
    <div className="flex flex-col items-center justify-end gap-4">
      <button
        onClick={() => swiperRef.current.slidePrev()}
        className="size-[36px] rounded-full bg-slate-100 flex items-center justify-center cursor-pointer"
      >
        <ArrowDown />
      </button>
      <button
        onClick={() => swiperRef.current.slideNext()}
        className="size-[36px] rounded-full bg-slate-100 flex items-center justify-center cursor-pointer"
      >
        <ArrowUp />
      </button>
    </div>
  );
};

export default Arrows;
