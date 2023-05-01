export default function WeatherLoadingCard() {
  return (
    <div className="mx-auto flex w-fit max-w-full flex-col gap-30px rounded-lg bg-mirage shadow-md md:w-[550px]">
      <div className="flex h-[109px] w-full animate-pulse flex-col-reverse items-center justify-between gap-10px px-30px pt-30px md:flex-row md:gap-30px">
        <div className="flex flex-col gap-10px md:gap-15px">
          <div className="flex flex-col items-center gap-5px md:flex-row md:items-end md:gap-10px">
            <div className="h-[36px] w-[45px] bg-bleached" />
            <div className="h-[10px] w-[140px] bg-bleached" />
          </div>

          <div className="flex items-center gap-10px">
            <div className="h-[20px] w-[20px] rounded-full bg-bleached" />
            <div className="h-[10px] w-[65px] bg-bleached" />
            <div className="h-[10px] w-[65px] bg-bleached" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-15px">
          <div className="h-[40px] w-[40px] rounded-full bg-bleached" />
          <div className="h-[10px] w-[80px] bg-bleached" />
        </div>
      </div>

      <div className="flex w-full animate-pulse flex-col items-center justify-between gap-20px border-t border-bleached px-30px py-20px md:flex-row">
        <div className="flex items-center gap-25px">
          <div className="flex items-center gap-10px">
            <div className="h-[25px] w-[25px] rounded-full bg-bleached" />
            <div className="h-[10px] w-[65px] bg-bleached" />
          </div>
          <div className="flex items-center gap-10px">
            <div className="h-[25px] w-[25px] rounded-full bg-bleached" />
            <div className="h-[10px] w-[65px] bg-bleached" />
          </div>
        </div>

        <div className="h-[10px] w-[105px] bg-bleached" />
      </div>
    </div>
  );
}
