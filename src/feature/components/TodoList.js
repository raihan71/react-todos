import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { TableView, TableHeader, TableBody, Column, Row, Cell, } from '@react-spectrum/table';
import { Button } from '@react-spectrum/button';
import { Flex } from '@react-spectrum/layout';
import { Well } from '@react-spectrum/well';
import { TextField } from '@react-spectrum/textfield';
import { Form } from '@react-spectrum/form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPencilAlt, faPlusSquare, faCheckCircle, faClock } from '@fortawesome/free-solid-svg-icons';
import { getTodos, addTodo, deleteTodo, updateTodo } from '../../service/todos';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [editTodo, setEditTodo] = useState({});
  const queryClient = useQueryClient();

  const {
    data: todos
  } = useQuery('todos', getTodos, {
    select: data => data.sort((a, b) => b.id - a.id)
  });

  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
    onError: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  const editTodoMutation = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
    onError: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
    onError: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo && !isEdit) {
      addTodoMutation.mutate({
        userId: 1, title: newTodo, completed: false
      });
    } else if (newTodo && isEdit) {
      editTodoMutation.mutate({
        ...editTodo, title: newTodo, completed: editTodo?.completed
      })
    }
    setNewTodo('');
    setEditTodo({});
  };
  const handleOnChange = (e) => {
    if (e) setNewTodo(e);
  };
  const handleDelete = (id) => {
    deleteTodoMutation.mutate({ id })
  };
  const handleUpdate = (item) => {
    setNewTodo(item?.title);
    setEditTodo(item);
    setIsEdit(true);
  };
  const handleSetCompleted = (item) => {
    editTodoMutation.mutate({
      ...item, completed: !item.completed
    })
  };

  const renderFormSubmit = (
    <Form
      onSubmit={handleSubmit}
      isQuiet
      isRequired
      aria-label="Form Add New Todo">
        <Flex alignItems="center">
          <TextField width="size-4600" value={newTodo} id="title" onChange={handleOnChange} label="Title" isRequired />
          <Button width="size-100" type="submit" UNSAFE_style={{ cursor: 'pointer' }} variant="accent" aria-label="Add data">
            <FontAwesomeIcon icon={faPlusSquare} />
          </Button>
        </Flex>
    </Form>
  );

  return (
    <>
      <Well>
        {renderFormSubmit}
      </Well>
      <Well>
        <TableView
          aria-label="Table list of todos"
        >
          <TableHeader>
            <Column isRowHeader>Title</Column>
            <Column isRowHeader>Status</Column>
            <Column isRowHeader>Action</Column>
          </TableHeader>
          <TableBody renderEmptyState={() => 'No results found.'}>
            {todos?.map((todo,index) => (
              <Row key={index}>
                  <Cell>
                    {todo?.title}
                  </Cell>
                  <Cell>{todo?.completed ? (
                    <Button onPress={() => handleSetCompleted(todo)} width="size-100" UNSAFE_style={{ background: '#008000', cursor: 'pointer' }} staticColor="black" style={`fill`} aria-label="Set uncomplete">
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </Button>
                  ) : (
                    <Button onPress={() => handleSetCompleted(todo)} width="size-100" variant="accent" style={`fill`} aria-label="Set complete" UNSAFE_style={{ cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faClock} />
                  </Button>
                  )}</Cell>
                  <Cell>
                    <Flex direction="row" gap="size-200">
                      <Button onPress={() => handleDelete(todo?.id)} width="size-100" UNSAFE_style={{ cursor: 'pointer' }} variant="negative" style={`fill`} aria-label="Delete data">
                        <FontAwesomeIcon icon={faTrashCan} />
                      </Button>
                      <Button onPress={() => handleUpdate(todo)} width="size-100"  UNSAFE_style={{ cursor: 'pointer' }} variant="secondary" aria-label="Edit data">
                        <FontAwesomeIcon icon={faPencilAlt} />
                      </Button>
                    </Flex>
                  </Cell>
              </Row>
            ))}
          </TableBody>
        </TableView>
      </Well>
    </>
  );
}

export default TodoList;
