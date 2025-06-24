import { Button } from "@/Components/CustomUI/Button/Button";
import {
  Card,
  CardBody,
  CardHeader,
} from "@/Components/CustomUI/Card/Card";
import TechStack from "@/Components/TechStack/TechStack";
import TypewriterText from "@/Components/TypeWritterEffect/TypeWritterText";
import { useTranslations } from "next-globe-gen";
import { CiMail } from "react-icons/ci";
import { FaEye } from "react-icons/fa";

export default function Home() {
  const t = useTranslations("home");

  return (
    <section className="h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-4xl mx-auto text-center space-y-8">
        {/* Hero Section */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-primary-500 to-accent-500 font-heading leading-tight">
            Simón Gómez Arango
          </h1>

          <TypewriterText
            speed={40}
            className="pt-4 text-lg sm:text-xl lg:text-2xl leading-relaxed text-foreground-muted max-w-3xl mx-auto"
          >
            <h2 className="">{t("title")}</h2>
          </TypewriterText>
        </div>

        <div className="flex flex-row gap-4 justify-center pt-6">
          <Button color="success" rightIcon={<FaEye size={20} />}>
            {t("project_button_label")}
          </Button>
          <Button color="accent" rightIcon={<CiMail size={20} />}>
            {t("contact_button_label")}
          </Button>
        </div>

        {/* Tech Stack Card - Compact Version */}
        <div className="">
          <Card className="gradient-glass border-gray-800 hover:glow-primary transition-all duration-300 max-w-4xl mx-auto">
            <CardHeader
              hasBorder
              className="text-white text-xl font-semibold pb-4"
            >
              {t("stack")}
            </CardHeader>
            <CardBody>
              <TechStack />
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
