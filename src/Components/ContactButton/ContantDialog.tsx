import { CiMail } from "react-icons/ci";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../UI/dialog";
import { useTranslations } from "next-globe-gen";
import { useState } from "react";
import { Button } from "../CustomUI/Button/Button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../UI/drawer";

interface ContactButtonDialogProps {
  ContactContent: React.ReactNode;
}

export const ContactButtonDialog = ({
  ContactContent,
}: ContactButtonDialogProps) => {
  const [open, setOpen] = useState(false);
  const t = useTranslations("home");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button color="accent" rightIcon={<CiMail size={18} />}>
          {t("contact_button_label")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t("contact_title")}</DialogTitle>
          <DialogDescription>{t("contact_subtitle")}</DialogDescription>
        </DialogHeader>
        {ContactContent}
      </DialogContent>
    </Dialog>
  );
};

export const ContactButtonDrawer = ({
  ContactContent,
}: ContactButtonDialogProps) => {
  const [open, setOpen] = useState(false);
  const t = useTranslations("home");
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button color="accent" rightIcon={<CiMail size={18} />}>
          {t("contact_button_label")}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{t("contact_title")}</DrawerTitle>
          <DrawerDescription>{t("contact_subtitle")}</DrawerDescription>
        </DrawerHeader>
        {ContactContent}
      </DrawerContent>
    </Drawer>
  );
};
