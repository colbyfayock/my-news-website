import Head from 'next/head'

import Layout from '@/components/Layout';
import Section from '@/components/Section';
import Container from '@/components/Container';
import PostGrid from '@/components/PostGrid';
import Unlock from '@/components/Unlock';

import posts from '@/data/posts';

import styles from '@/styles/Unlock.module.scss'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Unlock - The Hundred</title>
      </Head>
      <Section>
        <Container className={styles.heroContainer} size="content">
          <Unlock className={styles.unlock} />
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className={styles.heroTitle}>What You&apos;re Missing</h2>
          <PostGrid items={posts.slice(4, 7)} />
        </Container>
      </Section>
    </Layout>
  )
}