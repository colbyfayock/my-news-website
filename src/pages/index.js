import Head from 'next/head'

import Layout from '@/components/Layout';
import Section from '@/components/Section';
import Container from '@/components/Container';
import PostList from '@/components/PostList';
import PostGrid from '@/components/PostGrid';
import PostCard from '@/components/PostCard';
import Unlock from '@/components/Unlock';

import posts from '@/data/posts';

import styles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>The Hundred - Your antidote to information overload.</title>
        <meta name="description" content="Unlock the world's expertise with The Hundred" />
      </Head>

      <h1 className="sr-only">The Hundred</h1>

      <Section>
        <Container className={styles.heroContainer}>
          <div>
            <h2 className={styles.heroTitle}>Featured</h2>
            <PostCard item={posts[0]} />
          </div>
          <div>
            <h2 className={styles.heroTitle}>Latest</h2>
            <PostList items={posts.slice(1,4)} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Unlock className={styles.unlock} />
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className={styles.heroTitle}>In the Hundreds</h2>
          <PostGrid items={posts.slice(4, 7)} />
        </Container>
      </Section>
    </Layout>
  )
}