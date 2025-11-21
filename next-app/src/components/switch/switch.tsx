import { Button } from "@mantine/core";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng).then((r) => {
      console.log(r);
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        float: "right"
      }}
    >
      <Button
        size={"xs"}
        color={"red"}
        onClick={() => handleLanguageChange("it")}
      >
        Italiano
      </Button>
      <Button size={"xs"} onClick={() => handleLanguageChange("en")}>
        English
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
