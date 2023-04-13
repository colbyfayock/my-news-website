import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { FaComment } from 'react-icons/fa';

import { addCommas } from '@/lib/util';

import Icon100 from '@/components/Icon100';

import styles from './PostCard.module.scss';

const defaultImageSize = 'large';

const PostCard = ({ className, item, size = defaultImageSize }) => {
  const router = useRouter();

  let itemClassName = styles.postListItem;

  if ( className ) {
    itemClassName = `${itemClassName} ${className}`;
  }

  const image = item.image[size] || item.image[defaultImageSize];

  function handleOnLike(e) {
    e.preventDefault();
    router.push('/unlock');
  }

  function handleOnComment(e) {
    e.preventDefault();
    router.push('/unlock');
  }

  return (
    <div className={itemClassName}>
      <div className={styles.image}>
        <Link href={`/posts/${item.id}`}>
          <Image width={image.width} height={image.height} src={image.url} alt="" />
        </Link>
      </div>
      <div className={styles.content}>
        <p className={styles.title}>
          <Link href={`/posts/${item.id}`}>
            { item.title }
          </Link>
        </p>
        <ul className={styles.meta}>
          <li className={styles.likes}>
            <button onClick={handleOnLike}>
              <Icon100 /> { addCommas(item.likes.count) }
            </button>
          </li>
          <li className={styles.comments}>
            <button onClick={handleOnComment}>
              <FaComment /> { addCommas(item.comments.count) }
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PostCard;
