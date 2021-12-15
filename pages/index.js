import Link from "next/link";
import { CanvasClient } from "@uniformdev/canvas";
import { Composition, Slot } from "@uniformdev/canvas-react";
import { CANVAS_DRAFT_STATE } from "@uniformdev/canvas";

function HeroComponent({ greeting }) {
  return <h1>Hero: {greeting}</h1>;
}

const resolveRenderer = (component) => {
  // choose the component based on the Canvas component type
  // (you can also use a Map, switch, next/dynamic, etc here)
  if (component.type === "hero") {
    return HeroComponent;
  }
  return null;
};

export default function Home({ composition }) {
  return (
    <Composition data={composition} resolveRenderer={resolveRenderer}>
      <Slot name="content" />
      <Link href="?stackblitz=true">
        <button>Personalize</button>
      </Link>
    </Composition>
  );
}

// read the value of preview from the Next.js context
export async function getStaticProps({ preview }) {
  // create the Canvas client
  const client = new CanvasClient({
    apiHost: process.env.UNIFORM_CLI_BASE_URL || "https://uniform.app",
    apiKey: "uf1hnh35q0xns6g0jukleme7z386mqqe4p2hayhkdj7usm7p77g6rd3576hn7m7g2kr545mau9alped9w5a39ezrgfslkkpet",
    projectId: "cccb0f03-f9d7-421e-b395-4a70a1db0e7e",
  });

  // fetch the draft composition from Canvas by slug (you can also fetch by composition id)
  const { composition } = await client.getCompositionBySlug({
    slug: "/",
    state: CANVAS_DRAFT_STATE,
  });

  // set `composition` as a prop to the page
  return {
    props: {
      composition,
    },
  };
}
