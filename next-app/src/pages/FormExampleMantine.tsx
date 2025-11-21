import MantineForm from "@/components/MantineForm";
import {
  labelsForFormOne,
  placeholdersForFormOne,
  typesInput,
} from "@/constants/costants";
import { Container } from "@mantine/core";
import { useEffect, useRef } from "react";
import { formatDateToItalianLocale } from "@/utils/date";
import { useTranslation } from "react-i18next";
import Ab_form from "@/components/MantineForm";

export default function FormExampleMantine() {
  const renderCount = useRef(0);
  const { t } = useTranslation();

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <Container mt={10}>
    <h1>Cerca per zona il servizio di pulzie</h1>
      <Ab_form
        mode={"controlled"}
        labels={labelsForFormOne}
        placeholders={placeholdersForFormOne}
        buttonLabel="Submit"
      />
    </Container>
  );
}
