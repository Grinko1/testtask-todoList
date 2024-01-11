import { memo, useCallback, useState } from "react";
import cls from "./Header.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { AddTodo } from "features/todos/ui/AddTodo/AddTodo";
import { todoReducer } from "entities/todo/model/slices/todoSlice";

interface HeaderProps {
  className?: string;
}

export const Header = memo((props: HeaderProps) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(true);
  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);
  return (
    <div className={classNames(cls.Header, {}, [className])}>
      <h2>ToDo List</h2>
      <Button onClick={() => setIsOpen(true)}>Add new todo</Button>
      <AddTodo isOpen={isOpen} onClose={onClose} />
    </div>
  );
});
