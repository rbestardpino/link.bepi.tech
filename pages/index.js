import IconTextField from "@components/IconTextField";
import { createSlug, isValidUrl, validSlug } from "@lib/utils";
import {
  Link,
  PushPinOutlined,
  SendOutlined,
  Save,
  CopyAllOutlined,
} from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Grid, Container, Card, Typography, Button } from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import { db } from "@lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";

export default function Home() {
  const [url, setUrl] = useState("");
  const [errorUrl, setErrorUrl] = useState(false);
  const [slug, setSlug] = useState("");
  const [searchingSlug, setSearchingSlug] = useState(false);
  const [finalUrl, setFinalUrl] = useState("");

  const handleUrlChange = (e) => {
    e.preventDefault();
    setUrl(e.target.value);
    if (e.target.value.length && !isValidUrl(e.target.value)) {
      setErrorUrl(true);
    } else {
      setErrorUrl(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let _slug = slug;
    if (!_slug.length) {
      _slug = createSlug();
    }

    setSearchingSlug(true);
    const valid = validSlug(_slug);
    if (!valid) {
      setSlug("");
      toast.error(`Slug "${_slug}" in use, try again`);
      setSearchingSlug(false);
      return;
    }
    const docRef = doc(db, "urls", _slug);
    await setDoc(docRef, {
      url: url,
      slug: _slug,
      count: 0,
    });
    setSearchingSlug(false);
    setFinalUrl(`https://link.bepi.tech/${_slug}`);
    setSlug("");
    setUrl("");
    setErrorUrl(false);
  };

  const handleSlugChange = (e) => {
    e.preventDefault();
    setSlug(e.target.value);
  };

  return (
    <main>
      <Head>
        <title>link.bepi.tech</title>

        <meta property="og:title" content="link.bepi.tech" />
        <meta
          property="og:description"
          content="link.bepi.tech is an open-source and easy to use URL shortener."
        />
      </Head>
      <Container sx={{ my: 5 }}>
        <Grid
          container
          direction="column"
          rowSpacing={3}
          justifyContent="flex-start"
          alignItems="stretch"
        >
          <Grid item xs>
            <IconTextField
              label="URL (required)"
              error={errorUrl}
              icon={<Link />}
              value={url}
              onChange={handleUrlChange}
            />
          </Grid>
          <Grid item xs>
            <IconTextField
              label="Custom slug (optional)"
              icon={<PushPinOutlined />}
              value={slug}
              onChange={handleSlugChange}
            />
          </Grid>
          <Grid item xs>
            <LoadingButton
              loading={searchingSlug}
              loadingPosition="start"
              disabled={errorUrl || !url || searchingSlug}
              fullWidth
              variant="contained"
              color="primary"
              startIcon={<SendOutlined />}
              onClick={handleSubmit}
            >
              {searchingSlug ? "VALIDATING SLUG..." : "SHORTEN URL"}
            </LoadingButton>
          </Grid>
          {finalUrl && (
            <>
              <Grid item xs>
                <Typography variant="h6">Shortened link:</Typography>
              </Grid>
              <Grid item xs>
                {/* TODO: clip text if overflow */}
                <Button
                  variant="outlined"
                  color="inherit"
                  fullWidth
                  endIcon={<CopyAllOutlined />}
                  onClick={() => {
                    navigator.clipboard.writeText(finalUrl);
                    toast.success("Link copied to clipboard");
                  }}
                >
                  {finalUrl}
                </Button>
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </main>
  );
}
