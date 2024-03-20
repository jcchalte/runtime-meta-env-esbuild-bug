import type { Plugin, PluginBuild } from 'esbuild';
import * as importMetaEnv from "@import-meta-env/unplugin";

const plugin : Plugin = importMetaEnv.esbuild({
  example:'.env.example',
  transformMode:'compile-time'
});

export default plugin;

