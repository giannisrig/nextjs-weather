import FooterDocumentations from "@/components/demo/FooterDocumentations";
import FooterProjectOverview from "@/components/demo/FooterProjectOverview";
import FooterMenuAboutMe from "@/components/demo/FooterMenuAboutMe";
import FooterMenuGetStarted from "@/components/demo/FooterMenuGetStarted";

export default function MainFooter() {
  return (
    <div className="py-50px font-secondary lg:py-80px">
      <div className="container">
        <div className="flex w-full flex-col gap-30px md:gap-50px lg:gap-100px">
          <div className="grid w-full grid-cols-4 gap-50px">
            <div className="col-span-2 pr-20px">
              <FooterProjectOverview />
            </div>

            <FooterMenuGetStarted />
            <FooterMenuAboutMe />
          </div>

          <FooterDocumentations />
        </div>
      </div>
    </div>
  );
}
