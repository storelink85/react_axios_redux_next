"use client";
import {
  Card,
  Image,
  Text,
  Button,
  Group,
  Container,
} from "@mantine/core";

import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { Paths } from "@/constants/costants";

function CardDashboard() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
      <Container mt={10}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image
                src="https://www.aspirastore.com/blog/wp-content/uploads/2021/02/pulizie-di-casa-settimanali-aspirapolvere-centralizzato.jpg"
                height={300}
                alt="Norway"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>{t("mainText")}</Text>
          </Group>

          <Button
              color="blue"
              fullWidth
              mt="md"
              radius="md"
              onClick={() => router.push(Paths.formMantine)}
          >
            {t("mainButton")}
          </Button>
        </Card>
      </Container>
  );
}

export default CardDashboard;
