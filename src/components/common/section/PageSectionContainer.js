export default function PageSectionContainer({ children }) {
  return (
    <section className="w-full py-80px lg:py-100px">
      <div className="container">{children}</div>
    </section>
  );
}
