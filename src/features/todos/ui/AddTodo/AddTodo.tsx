import { memo } from "react";
import cls from "./AddTodo.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui/Modal/Modal";
import { Form } from "./Form/Form";

interface AddTodoProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const AddTodo = memo((props: AddTodoProps) => {
  const { className, isOpen, onClose } = props;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={classNames(cls.AddTodo, {}, [className])}
    >
      <Form onClose={onClose} />
    </Modal>
  );
});
