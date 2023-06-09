import { ReactNodeWrapper } from "@/types/index";

export default function PageSectionContainer({ children }: ReactNodeWrapper) {
  return (
    <section className="z-1 relative w-full py-80px lg:py-100px">
      <div className="container">{children}</div>
    </section>
  );
}
