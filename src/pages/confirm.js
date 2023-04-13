import Head from 'next/head'

import Layout from '@/components/Layout';
import Section from '@/components/Section';
import Container from '@/components/Container';
import PostGrid from '@/components/PostGrid';

import posts from '@/data/posts';

import styles from '@/styles/Confirm.module.scss'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Confirm - The Hundred</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Section>
        <Container className={styles.heroContainer} size="content">
          <h1>Just one more step and you&apos;re in.</h1>
          <p>
            Check your email for a confirmation.
          </p>
          <p>
            Be sure to click confirm to get unlimited access to The Hundred.
          </p>
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