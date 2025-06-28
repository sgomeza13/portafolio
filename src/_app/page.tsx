import { Button } from "@/Components/CustomUI/Button/Button";
import { Card, CardBody, CardHeader } from "@/Components/CustomUI/Card/Card";
import TechStack from "@/Components/TechStack/TechStack";
import TypewriterText from "@/Components/TypeWritterEffect/TypeWritterText";
import { useTranslations } from "next-globe-gen";
import { CiMail } from "react-icons/ci";
import { FaEye } from "react-icons/fa";

export default function Home() {
  const t = useTranslations("home");

  return (
    <section className="flex flex-col justify-center px-4 sm:px-6">
      <div className="w-full max-w-4xl mx-auto text-center space-y-6">
        {/* Content */}

        {/* Hero Section */}
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-6xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-primary-500 to-accent-500 font-heading leading-tight">
            Simón Gómez Arango
          </h1>

          <TypewriterText
            speed={40}
            className="pt-2 sm:pt-4 text-xl sm:text-lg lg:text-2xl leading-relaxed text-foreground-muted max-w-3xl mx-auto lg:h-20 h-28"
          >
            <h2>{t("title")}</h2>
          </TypewriterText>
        </div>

        {/* Botones */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button color="success" rightIcon={<FaEye size={18} />} href="/projects">
            {t("project_button_label")}
          </Button>
          <Button color="accent" rightIcon={<CiMail size={18} />}>
            {t("contact_button_label")}
          </Button>
        </div>

        {/* Tech Stack */}
        <div>
          <Card className="gradient-glass border-gray-800 hover:glow-primary transition-all duration-300 max-w-4xl mx-auto">
            <CardHeader
              hasBorder
              className="text-white text-lg sm:text-xl font-semibold pb-4"
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
