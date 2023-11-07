"use client"; 
import React, { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const dataURL = "https://jsonplaceholder.typicode.com/todos/";

  const [data, setdata] = useState(null);

  const getData = async () => {
    try {
      fetch(dataURL)
        .then(response => response.json())
        .then(json => setdata(json))
    } catch (error) {

    }
  }
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {/* {JSON.stringify(data)} */}
      </div>

      <div>
      <h2>Todo List</h2>
      <ul>
        {data?.map((todo) => (
          <li key={todo.id}>
            <p><strong>Task:</strong> {todo.title}</p>
            <p><strong>Completed:</strong> {todo.completed ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>

      <button onClick={() => getData()}>
        get data
      </button>
    </main>
  )
}
