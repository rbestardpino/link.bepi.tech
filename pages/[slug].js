import { db } from "@lib/firebase";
import { Container } from "@mui/material";
import { updateDoc, doc, getDoc, increment } from "firebase/firestore";
import Head from "next/head";

export async function getServerSideProps({ params }) {
  const slug = params.slug;

  try {
    const docRef = doc(db, "urls", slug);

    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return {
        notFound: true,
      };
    }

    await updateDoc(docRef, {
      count: increment(1),
    });

    const data = docSnap.data();

    return {
      redirect: {
        destination: data.url,
        permanent: true,
      },
    };
  } catch (_) {
    return {
      props: { slug: slug },
    };
  }
}

export default function Redirect({ slug }) {
  return (
    <main>
      <Head>
        <title>Redirect from link.bepi.tech</title>

        <meta property="og:title" content="link.bepi.tech" />
        <meta
          property="og:description"
          content="link.bepi.tech is an open-source and easy to use URL shortener."
        />
      </Head>
      <Container sx={{ my: 5 }}>{slug}</Container>
    </main>
  );
}
