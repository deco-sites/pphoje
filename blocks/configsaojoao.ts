import { applyConfigSync } from "$live/blocks/utils.ts";
import JsonViewer from "$live/components/JsonViewer.tsx";
import { Block, BlockModule, InstanceOf } from "$live/engine/block.ts";

// deno-lint-ignore no-empty-interface
export interface ConfigSaoJoao {}

export type ConfigSaoJoaos = InstanceOf<
  typeof configSaoJoaoBlock,
  "#/root/configSaoJoaos"
>;

// deno-lint-ignore no-explicit-any
export type ConfigSaoJoaoFunc<TConfig = any> = (c: TConfig) => ConfigSaoJoao;

const configSaoJoaoBlock: Block<BlockModule<ConfigSaoJoaoFunc>> = {
  type: "configssaojoao",
  introspect: {
    default: "0",
  },
  adapt: applyConfigSync,
  defaultPreview: (configSaoJoao) => {
    return {
      Component: JsonViewer,
      props: { body: JSON.stringify(configSaoJoao, null, 2) },
    };
  },
};

/**
 * <TConfig>(config:TConfig) => ConfigSaoJoao
 * The configSaoJoao block is used to configure platforms using settings
 */
export default configSaoJoaoBlock;
