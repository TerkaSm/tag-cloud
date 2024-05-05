import { useState } from 'react'
import './App.css'
import { TagCloud } from './components/TagCloud/TagCloud'
import Form from './components/Form/Form'

interface Tags {
  [index: number]: string;
}

function App(): JSX.Element {
  const [tags, setTags] = useState<Tags[]>(['Digital Art', 'Replacement', 'Aria', 'Fitness', 'Wireless', 'Hike', 'Active', 'Medical', 'Free', 'Setup', 'Goal', 'Black'])

  const handleAddTag = (newTag: string): void => {
    setTags(prevTags => [...prevTags, newTag]);
  };

  const handleDeleteFirstTag = (): void => {
    setTags(prevTags => prevTags.slice(1));
  };

  return (
    <>
      <TagCloud tags={tags} />
      <Form handleAddTag={handleAddTag} handleDeleteFirstTag={handleDeleteFirstTag} />
    </>
  )
}

export default App
