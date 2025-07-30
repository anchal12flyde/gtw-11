import Head from "next/head";
import StoryDetaling from "@/components/globalcomponents/StoryDetailing";

export default function Numyum() {
  return (
    <>
      <Head>
        <title>Design Slow. Build Smart. Launch Fast.</title>
      </Head>
      <StoryDetaling
        title="Design Slow. Build Smart. Launch Fast."
        date="July 5, 2025"
        category="Mobile App"
        tags={["Mobile App", "Mobile App"]}
        heroImage="/images/success_bg.png"
        sections={[
          {
            type: "text",
            content: `The MVNO (Mobile Virtual Network Operator) market is fiercely competitive...`,
          },
          {
            type: "image",
            imageSrc: "/images/assets/success_img.png",
            imageAlt: "Success Image",
            content:
              "Triarchy co-founder and creative director, Adam Taubenfligel - TRIARCHY",
          },
          {
            type: "text",
            content: "Madgicx is an all-in-one ad management platform...",
          },
          {
            type: "list",
            content: [
              "Manual Meta Ads - Static budgets; manual shifts‍",
              "With Madgicx (AI/Automation) - Autonomous Budget Optimizer (ABO)...",
              "Impact on CAC - Cuts wasted spend; lowers CAC",
            ],
          },
        ]}
      />
    </>
  );
}
