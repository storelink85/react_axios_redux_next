import { Paths } from "@/constants/costants";
import { NavLink } from "@mantine/core";
import { IconGauge, IconChevronRight, IconHome2 } from "@tabler/icons-react";
import Link from "next/link";
import styles from "./NavBar.module.scss";
import { useTranslation } from "react-i18next";

function NavBar() {
  const { t } = useTranslation();
  return (
    <div className={styles.navbar}>
      <div className={styles.navLink}>
        <NavLink
          component={Link}
          href={Paths.dashboard}
          label={t("HomePage")}
          leftSection={<IconHome2 size="1rem" stroke={1.5} />}
        />
        <NavLink
          component={Link}
          href={Paths.formMantine}
          label={"tbd"}
          leftSection={<IconHome2 size="1rem" stroke={1.5} />}
        />
        <NavLink
          component={Link}
          href={Paths.dashboard}
          label={"tbd"}
          leftSection={<IconGauge size="1rem" stroke={1} />}
          rightSection={
            <IconChevronRight
              size="0.8rem"
              stroke={1.5}
              className="mantine-rotate-rtl"
            />
          }
        />
      </div>
    </div>
  );
}

export default NavBar;
