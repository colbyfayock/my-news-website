import PostListItem from '@/components/PostListItem';

import styles from './PostList.module.scss';

const PostList = ({ items }) => {
  return (
    <div className={styles.postList}>
      <ul>
        {items.map(item => {
          return <PostListItem key={item.id} className={styles.postListItem} item={item} />
        })}
      </ul>
    </div>
  )
}

export default PostList;
