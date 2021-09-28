import React, { useState } from 'react';
import { Link, CodeInline } from '../../components/post components/Post';
import './styles.css';

function ToDoApp() {
  function getToDoList() {
    if (!localStorage.getItem('toDoArr')) {
      localStorage.setItem(
        'toDoArr',
        JSON.stringify([
          {
            toDoText: 'wipe the dust',
            id: Math.random(),
          },
          {
            toDoText: 'walk the dog out',
            id: Math.random(),
          },
          {
            toDoText: 'call parents',
            id: Math.random(),
          },
        ])
      );
    }

    return JSON.parse(localStorage.getItem('toDoArr'));
  }

  const [toDoListState, setToDoListState] = useState(getToDoList);

  return (
    <div className="toDoApp">
      <AddItemForm
        toDoListState={toDoListState}
        setToDoListState={setToDoListState}
        getToDoList={getToDoList}
      />
      <ToDoList
        toDoListState={toDoListState}
        setToDoListState={setToDoListState}
        getToDoList={getToDoList}
      />
    </div>
  );
}

function AddItemForm({ toDoListState, setToDoListState, getToDoList }) {
  const [inputState, setInputState] = useState('');

  function addNewItem(e) {
    e.preventDefault();
    if (!inputState) return;
    const newList = [
      {
        toDoText: inputState,
        id: Math.random(),
      },
      ...toDoListState,
    ];
    localStorage.setItem('toDoArr', JSON.stringify(newList));
    setToDoListState(getToDoList());
    setInputState('');
  }

  return (
    <form>
      <input
        type="text"
        placeholder="what to do?"
        value={inputState}
        onChange={e => setInputState(e.target.value)}
      />
      <button onClick={addNewItem}>Add</button>
    </form>
  );
}

function ToDoList({ setToDoListState, toDoListState, getToDoList }) {
  return (
    <div className="toDoList">
      {toDoListState.map(toDoItem => (
        <ToDoItem
          toDoText={toDoItem.toDoText}
          key={toDoItem.id}
          id={toDoItem.id}
          toDoListState={toDoListState}
          setToDoListState={setToDoListState}
          getToDoList={getToDoList}
        ></ToDoItem>
      ))}
    </div>
  );
}

function ToDoItem({
  toDoText,
  id,
  toDoListState,
  setToDoListState,
  getToDoList,
}) {
  function removeItem() {
    const newList = toDoListState.filter(o => o.id != id);
    localStorage.setItem('toDoArr', JSON.stringify(newList));
    setToDoListState(getToDoList());
  }

  return (
    <div className="toDoItem">
      <div className="toDoText">{toDoText}</div>
      <button className="delBtn" onClick={removeItem}>
        Remove
      </button>
    </div>
  );
}

export const toDoArticle = {
  title: 'ToDo app',
  date: '2021.09.26',
  tagsArr: ['react', 'ToDo', 'basics'],
  abstract: 'abstract from the article',
  articlesArr: [
    {
      type: 'text',
      val: `Let's make the simplest todo list with local data storage.`,
    },
    {
      type: 'code',
      val: `
        import React, { useState } from 'react';
        import './styles.css';

        function ToDoApp() {
          function getToDoList() {
            if (!localStorage.getItem('toDoArr')) {
              localStorage.setItem(
                'toDoArr',
                JSON.stringify([
                  {
                    toDoText: 'wipe the dust',
                    id: Math.random(),
                  },
                  {
                    toDoText: 'walk the dog out',
                    id: Math.random(),
                  },
                  {
                    toDoText: 'call parents',
                    id: Math.random(),
                  },
                ])
              );
            }

            return JSON.parse(localStorage.getItem('toDoArr'));
          }

          const [toDoListState, setToDoListState] = useState(getToDoList);

          return (
            <div className="toDoApp">
              <AddItemForm
                toDoListState={toDoListState}
                setToDoListState={setToDoListState}
                getToDoList={getToDoList}
              ></AddItemForm>
              <ToDoList
                toDoListState={toDoListState}
                setToDoListState={setToDoListState}
                getToDoList={getToDoList}
              ></ToDoList>
            </div>
          );
        }

        function AddItemForm({ toDoListState, setToDoListState, getToDoList }) {
          const [inputState, setInputState] = useState('');

          function addNewItem(e) {
            e.preventDefault();
            if (!inputState) return;
            const newList = [
              {
                toDoText: inputState,
                id: Math.random(),
              },
              ...toDoListState,
            ];
            localStorage.setItem('toDoArr', JSON.stringify(newList));
            setToDoListState(getToDoList());
            setInputState('');
          }

          return (
            <form>
              <input
                type="text"
                placeholder="what to do?"
                value={inputState}
                onChange={e => setInputState(e.target.value)}
              />
              <button onClick={addNewItem}>Add</button>
            </form>
          );
        }

        function ToDoList({ setToDoListState, toDoListState, getToDoList }) {
          return (
            <div className="toDoList">
              {toDoListState.map(toDoItem => (
                <ToDoItem
                  toDoText={toDoItem.toDoText}
                  key={toDoItem.id}
                  id={toDoItem.id}
                  toDoListState={toDoListState}
                  setToDoListState={setToDoListState}
                  getToDoList={getToDoList}
                ></ToDoItem>
              ))}
            </div>
          );
        }

        function ToDoItem({
          toDoText,
          id,
          toDoListState,
          setToDoListState,
          getToDoList,
        }) {
          function removeItem() {
            const newList = toDoListState.filter(o => o.id != id);
            localStorage.setItem('toDoArr', JSON.stringify(newList));
            setToDoListState(getToDoList());
          }

          return (
            <div className="toDoItem">
              <div className="toDoText">{toDoText}</div>
              <button className="delBtn" onClick={removeItem}>
                Remove
              </button>
            </div>
          );
        }
      `,
    },
    {
      type: 'output',
      val: <ToDoApp></ToDoApp>,
    },
  ],
};
