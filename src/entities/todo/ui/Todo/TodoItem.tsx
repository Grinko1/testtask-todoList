import { classNames } from "shared/lib/classNames/classNames";
import cls from "./TodoItem.module.scss";
import { memo } from "react";
import { Todo } from "entities/todo/model/types/todo";
import { Button } from "shared/ui/Button/Button";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { todosActions } from "features/todos/model/slices/todosSlice";

interface TodoProps {
  className?: string;
  todo: Todo;
}

export const TodoItem = memo((props: TodoProps) => {
  const { className, todo } = props;
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(todosActions.deleteTodo(todo));
  };

  return (
    <div className={classNames(cls.Todo, {}, [className])}>
      <div className={cls.header}>
        <div className={cls.info}>
          <input type="checkbox" checked={todo.completed} onChange={() => {}} />
          <p> {todo.title}</p>
        </div>

        <div className={cls.actions}>
          <Button className={cls.edit}>&#9998;</Button>
          <Button className={cls.delete} onClick={handleDelete}>
            &#10005;
          </Button>
        </div>
      </div>

      <p>{todo.text}</p>
    </div>
  );
});
