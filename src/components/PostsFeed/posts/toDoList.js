import { useState } from 'react'
import styled from 'styled-components'
import shortid from 'shortid'

const StyledContainer = styled.div`
  width: 90%;
  border: 1px solid grey;
  background-color: #fff;
  border-radius: 4px;
  margin: 0px auto;
  padding: 5px;

  form {
    margin: 10px;
    text-align: center;

    input {
      padding: 3px;
    }

    button {
      margin-left: 10px;
      width: 50px;
      padding: 3px;
      cursor: pointer;
    }
  }

  .toDoItem {
    margin: 5px 0px;
    padding: 5px;
    border-bottom: 1px dotted grey;

    display: flex;
    justify-content: space-between;
  }

  .delBtn {
    cursor: pointer;
  }
`

function ToDoApp() {
  function getToDoList() {
    if (!localStorage.getItem('toDoArr')) {
      localStorage.setItem(
        'toDoArr',
        JSON.stringify([
          {
            toDoText: 'wipe the dust',
            id: shortid(),
          },
          {
            toDoText: 'walk the dog out',
            id: shortid(),
          },
          {
            toDoText: 'call parents',
            id: shortid(),
          },
        ])
      )
    }

    return JSON.parse(localStorage.getItem('toDoArr'))
  }

  const [toDoListState, setToDoListState] = useState(getToDoList)

  return (
    <StyledContainer>
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
    </StyledContainer>
  )
}

function AddItemForm({ toDoListState, setToDoListState, getToDoList }) {
  const [inputState, setInputState] = useState('')

  function addNewItem(e) {
    e.preventDefault()
    if (!inputState) return
    const newList = [
      {
        toDoText: inputState,
        id: shortid(),
      },
      ...toDoListState,
    ]
    localStorage.setItem('toDoArr', JSON.stringify(newList))
    setToDoListState(getToDoList())
    setInputState('')
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
  )
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
      {toDoListState.length === 0 ? 'Nothing to do' : ''}
    </div>
  )
}

function ToDoItem({
  toDoText,
  id,
  toDoListState,
  setToDoListState,
  getToDoList,
}) {
  function removeItem() {
    const newList = toDoListState.filter(o => o.id !== id)
    localStorage.setItem('toDoArr', JSON.stringify(newList))
    setToDoListState(getToDoList())
  }

  return (
    <div className="toDoItem">
      <div className="toDoText">{toDoText}</div>
      <button className="delBtn" onClick={removeItem}>
        Remove
      </button>
    </div>
  )
}

const toRender = <ToDoApp />

export const toDoList = {
  title: 'ToDo app',
  date: '2021.09.26',
  tagsArr: ['react', 'ToDo', 'basics'],
  postParts: [
    {
      type: 'text',
      val: 'Let\'s make the simplest todo list with local data storage.',
    },
    {
      type: 'code',
      lang: 'jsx',
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
                    id: shortid(),
                  },
                  {
                    toDoText: 'walk the dog out',
                    id: shortid(),
                  },
                  {
                    toDoText: 'call parents',
                    id: shortid(),
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
                id: shortid(),
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
              {toDoListState.length === 0 ? 'Nothing to do' : ''}
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
            const newList = toDoListState.filter(o => o.id !== id);
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

        const toRender = <ToDoApp />
      `,
    },
    {
      type: 'output',
      val: toRender
    },
  ],
}
