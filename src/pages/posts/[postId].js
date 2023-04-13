import Head from 'next/head'

import Layout from '@/components/Layout';
import Section from '@/components/Section';
import Container from '@/components/Container';
import PostGrid from '@/components/PostGrid';
import PostCard from '@/components/PostCard';
import Unlock from '@/components/Unlock';

import posts from '@/data/posts';

import styles from '@/styles/Post.module.scss'

export default function Post({ post, morePosts }) {
  return (
    <Layout>
      <Head>
        <title>{`${post.title} - The Hundred`}</title>
        <meta name="description" content={`Get access to ${post.title} and more on The Hundred.`} />
      </Head>
      <Section>
        <Container className={styles.heroContainer}>
          <div>
            <PostCard item={post} size="medium" />
          </div>
          <div>
            <h2 className={styles.heroTitle}>The Breakdown</h2>
            <p className={styles.teaser}>{ post.teaser }</p>
            <Unlock className={styles.unlock} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className={styles.heroTitle}>More from The Hundred</h2>
          <PostGrid items={morePosts} />
        </Container>
      </Section>

    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = posts.find(({ id }) => id === params?.postId);
  return {
    props: {
      post,
      morePosts: posts.filter(({ id }) => id !== params.postId)
                      .sort(() => 0.5 - Math.random()).slice(0, 3)
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}