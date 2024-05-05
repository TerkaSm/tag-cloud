import React from 'react'
import styles from './Form.module.css'
import { useState } from 'react';

interface Props {
  handleAddTag: (newTag: string) => void;
  handleDeleteFirstTag: () => void;
}

const Form = ({handleAddTag, handleDeleteFirstTag}: Props): JSX.Element => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleAddTag(value);
    setValue('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="tagInput">Add new tag </label>
      <input className={styles.input}
        type="text"
        id="tagInput"
        name="tagInput"
        value={value}
        onChange={handleChange}
      />
      <div className={styles.buttons}>
        <button className={styles.button} type="submit">Add Tag</button>
        <button className={styles.button} onClick={handleDeleteFirstTag}>Delete First Tag</button>
      </div>
    </form>
  )
}

export default Form
