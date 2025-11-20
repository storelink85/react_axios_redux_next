import { Modal } from "@mantine/core";

type CardProps = {
  name: string;
  email: string;
  zone_and_city: any;
  onClose: () => void;
  opened: boolean;
  messageToLocalStorage: boolean | string;
};

function ModalUser({
  name,
  email,
  zone_and_city,
  onClose,
  opened,
  messageToLocalStorage = "unknown user",
}: CardProps) {
  return (
    <Modal opened={opened} onClose={onClose} title={messageToLocalStorage}>
      <p>{name}</p>
      <p>{email}</p>
      <p>{zone_and_city}</p>
    </Modal>
  );
}

export default ModalUser;
