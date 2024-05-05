
import styles from './TagCloud.module.css'

interface Props {
  tags: string[];
  setTags: () => void;
}

export const TagCloud = ({tags}: Props): JSX.Element => {
  

  return (
    <div className={styles.container}>
      {tags && tags.map((tag, index) => <span className={styles.tag} key={index}>{tag}</span>)}
    </div>
  )
}

