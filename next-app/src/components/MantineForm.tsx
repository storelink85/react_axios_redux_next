import { useEffect, useState } from "react";
import { useForm } from "@mantine/form";
import { TextInput, Button, Container } from "@mantine/core";
import { validateForm } from "@/utils/validateFunction/validateFormOne";
import ModalUser from "./modalUser";
import NotificationInfo from "./notification/Notification";
import { useAppDispatch } from "@/hook/hooks";
import { simulateRegisterUser } from "@/feature/user.slice";
import { consoleLog, typesInput } from "@/constants/costants";
import { UserFormDTO } from "@/feature/user.types";
import { handleTypesInGenericForm } from "@/utils/handleTypesOfGenericForm/handleTypesOfGenericForm";

type genericPropsMantine = {
  labels: string[];
  placeholders: string[];
  buttonLabel: string;
  mode?: "uncontrolled" | "controlled";
};

function Ab_form({
  labels,
  placeholders,
  buttonLabel,
  mode,
}: genericPropsMantine) {
  const dispatch = useAppDispatch();
  const [openModal, setModalOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<UserFormDTO>();
  const [notification, setNotification] = useState(false);
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(localStorage.getItem("ADDED_NEW_USER") as string);
  }, []);

  const form = useForm({
    mode: mode || "controlled",
    initialValues: {
      name: "",
      email: "",
      zone_and_city: 0,
    },
    validate: validateForm,
  });

  async function handleSubmit({ email, name, zone_and_city }: UserFormDTO) {
    setLoading(true);
    try {
      const value = await dispatch(
        simulateRegisterUser({
          email,
          name,
          zone_and_city,
        }),
      ).unwrap();
      setModalOpened(true);
      setUserData({
        name: value.name,
        zone_and_city: value.zone_and_city,
        email: value.email,
      });
      form.reset();
      setNotification(true);
    } catch (error) {
      console.log(error + consoleLog.error);
    } finally {
      setLoading(false);
    }
  }

  function showModalUser() {
    return (
      <ModalUser
    name={userData?.name || ""}
    email={userData?.email || ""}
    zone_and_city={userData?.zone_and_city || 1}
    onClose={() => setModalOpened(false)}
    opened={openModal}
    messageToLocalStorage={user + " : added user"}
    />
    );
  }

  function showNotificationInfo() {
    return (
      <NotificationInfo
        color={"green"}
        radius={"10"}
        title={"user added successfully."}
        message={
          "if you go to the dashboard page, you can see the Redux useAppSelector information"
        }
        onClose={() => setNotification(false)}
      />
    );
  }

  return (
    <Container>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        {labels.map((label, _index) => (
          <div key={_index} style={{ marginBottom: "1rem" }}>
            <TextInput
              type={handleTypesInGenericForm(labels[_index]) as string}
              label={label}
              placeholder={placeholders[_index]}
              {...form.getInputProps(label.toLowerCase())}
            />
          </div>
        ))}
        <Button
          type="submit"
          mt="lg"
          disabled={!form.values.name || !form.values.email || !form.values.zone_and_city}
          loading={loading}
        >
          {buttonLabel}
        </Button>
      </form>
      {showModalUser()}
      {notification && showNotificationInfo()}
    </Container>
  );
}

export default Ab_form;
