import PostCard from '@/components/PostCard';

import styles from './PostGrid.module.scss';

const PostGrid = ({ items }) => {
  return (
    <div className={styles.postGrid}>
      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>
              <PostCard className={styles.postGridItem} item={item} size="medium" />
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default PostGrid;
