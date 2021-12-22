import Link from "next/link";
import { CanvasClient } from "@uniformdev/canvas";
import { Composition, Slot } from "@uniformdev/canvas-react";
import { CANVAS_DRAFT_STATE } from "@uniformdev/canvas";

function HeroComponent({ greeting }) {
  return <h2>Hero: {greeting}</h2>;
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
      <h1>Uniform Starter for Next.js</h1>
      <p>
        Congratulations! You are now running Next.js app powered by Uniform.
      </p>
      <p>
        Below you see two Hero components rendered from Uniform Canvas. The
        placement of these components is controlled in Canvas and can be changed
        without developer's involvement. The second Hero is configured to be
        personalizable via Uniform Optimize. Try hitting the "Personalize"
        button to see it personalize.
      </p>
      <Slot name="content" />
      <Link href="?stackblitz=true">
        <button>Personalize</button>
      </Link>
      <p>
        See more about what else you can do in readme. Visit{" "}
        <a
          href="https://docs.uniform.app/canvas/tutorials/nextjs-tutorial"
          target="_blank"
          rel="noopener noreferrer"
        >
          this Next.js tutorial
        </a>{" "}
        to learn more of what you can do with Uniform Canvas and Optimize.
      </p>
      <p>
        Download{" "}
        <a
          href="https://chrome.google.com/webstore/detail/uniform-optimize/dcmlokofjljnfjcknpmhjocogllfbhkg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Uniform Optimize extension for Chrome
        </a>{" "}
        to interact with the current visitor context.
      </p>
    </Composition>
  );
}

// read the value of preview from the Next.js context
export async function getStaticProps({ preview }) {
  // create the Canvas client
  const client = new CanvasClient({
    apiKey: process.env.UNIFORM_API_KEY,
    projectId: process.env.UNIFORM_PROJECT_ID,
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
