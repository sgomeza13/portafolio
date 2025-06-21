import { Button } from "@/Components/CustomUI/Button/Button";
import { Card, CardBody, CardFooter, CardHeader } from "@/Components/CustomUI/Card/Card";
import TypewriterText from "@/Components/TypeWritterEffect/TypeWritterText";
import { useTranslations } from "next-globe-gen";

export default function Home() {
  const t = useTranslations("home");
  return (
    <section className="min-h-screen text-sand-400 px-6 py-24 flex flex-col items-center justify-center font-sans">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-5xl sm:text-6xl font-bold text-berry-500 font-heading">
          Simón Gómez Arango
        </h1>
        <TypewriterText speed={60} className="py-10">
          <p className="text-lg sm:text-xl leading-relaxed">
            {t("title")}
          </p>
        </TypewriterText>
        </div>

        <div className="flex justify-center gap-4 py-10">
          <Button color="default" loading styleType="solid">
            Hire Me
          </Button>
          <Button color="default" styleType="outline">
            Contact Me
          </Button>
          <Button color="success" styleType="solid">
            Download CV
          </Button>
        </div>
        <Card className="bg-berry-500/20" >
          <CardHeader className="text-white">Hola vv que mas pues</CardHeader>
          <CardBody className="grid grid-cols-3 gap-4">
            <Button color="success_glass" styleType="solid">
              Success Glass
            </Button>
            <Button color="error" styleType="outline">
              Delete
            </Button>
            <Button color="default" styleType="ghost">
              Ghost Action
            </Button>
            <Button color="secondary" styleType="solid">
              Classic
            </Button>
            <Button color="neutral" styleType="link">
              Read More
            </Button>
            <Button color="default" styleType="solid">
              Read More
            </Button>
          </CardBody>
          <CardFooter className="text-white" hasBorder>Footer</CardFooter>
        </Card>
    </section>
  );
}
