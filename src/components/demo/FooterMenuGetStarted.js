import FooterMenu from "@/components/demo/FooterMenu";

export default function FooterMenuGetStarted() {
  const list = [
    {
      name: "Read Article / Tutorial",
      url: "#",
    },
    {
      name: "View Repository",
      url: "#",
    },
    {
      name: "Live Demo",
      url: "#",
    },
    {
      name: "Generate Template",
      url: "#",
    },
    {
      name: "Deploy on Vercel",
      url: "#",
    },
  ];

  return (
    <div className="flex max-w-full flex-col gap-15px">
      <h3 className={`font-primary text-2xl font-semibold`}>Get started</h3>

      <FooterMenu list={list} />
    </div>
  );
}
