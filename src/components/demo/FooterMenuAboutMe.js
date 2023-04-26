import FooterMenu from "@/components/demo/FooterMenu";

export default function FooterMenuAboutMe() {
  const list = [
    {
      name: "Website",
      url: "#",
    },
    {
      name: "Github",
      url: "#",
    },
    {
      name: "LinkedIn",
      url: "#",
    },
    {
      name: "UpWork",
      url: "#",
    },
    {
      name: "Code Playground",
      url: "#",
    },
  ];

  return (
    <div className="flex max-w-full flex-col gap-15px">
      <h3 className={`font-primary text-2xl font-semibold`}>About me</h3>

      <FooterMenu list={list} />
    </div>
  );
}
