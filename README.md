# Uniform Starter for Next.js

This is a barebones Next.js starter that is pre-wired for Uniform Canvas and Uniform Optimize.

This app fast-tracks your progress on the [Next.js tutorial](https://docs.uniform.app/canvas/tutorials/nextjs-tutorial) since all the dependencies are already in place.

## Environment variables

Please see `.env` for the environment variables. The file contains the `UNIFORM_PROJECT_ID` and `UNIFORM_API_KEY` values from a sample project. These values enable this Next.js app to pull data from a Uniform project.

> In order to pull content from your own project, create a new project on https://uniform.app and update these environment variable values.

## How to run / build

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# to run production build and static site generation
$ npm run build

# to start a production server
$ npm run start

```

## Pushing components and compositions from disk

Canvas operates with components and compositions. These entities are serialized on disk under the `/data` folder. This allows to deserialize these into any Uniform project with [Uniform CLI](https://docs.uniform.app/canvas/tutorials/cli).

Once you create your own Uniform project at https://uniform.app and update environment variables in the `.env` file, you will be able to push the components and compositions from disk into your empty project by running `npm run push` script.

> Ensure that your `UNIFORM_API_KEY` has enough permissions to create components and compositions (make sure to toggle all checkboxes for Uniform Canvas permissions when creating your API key). Learn more about Uniform CLI [here](https://docs.uniform.app/canvas/tutorials/cli).
