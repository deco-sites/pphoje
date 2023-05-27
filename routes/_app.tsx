import { AppProps } from "$fresh/server.ts";
import { context } from "$live/live.ts";
import GoogleTagManager from "partytown/integrations/GTM.tsx";
import GlobalTags from "../components/GlobalTags.tsx";

const trackingId = "";

export default function App(props: AppProps) {
  return (
    <>
      {/* Add Tag Manager script during production only. To test it locally remove the condition */}
      {!!context.deploymentId && trackingId && (
        <GoogleTagManager trackingId={trackingId} />
      )}
      <GlobalTags />
      <props.Component />
      <style
        id="__DESIGN_SYSTEM_VARS-P0-0"
        dangerouslySetInnerHTML={{
          __html: `:root {--p: 180 100% 10%;--pf: 180 100% 8%;--pc: 180 12% 82%;--s: 0 39% 39%;--sf: 0 39% 31%;--sc: 0 29% 88%;--a: 150 100% 50%;--af: 150 100% 40%;--ac: 151 110% 10%;--n: 0 0% 20%;--nf: 0 0% 16%;--nc: 0 0% 84%;--b1: 0 0% 100%;--b2: 0 0% 90%;--b3: 0 0% 50%;--bc: 0 0% 20%;--su: 150 62% 95%;--suc: 140 3% 19%;--wa: 43 100% 95%;--wac: 48 6% 19%;--er: 9 100% 95%;--erc: 12 6% 19%;--in: 220 100% 97%;--inc: 220 3% 19%;--rounded-box: 1rem;--rounded-btn: 0.5rem;--rounded-badge: 1.9rem;--animation-btn: 0.25s;--animation-input: 0.2s;--btn-text-case: uppercase;--btn-focus-scale: 0.95;--border-btn: 1px;--tab-border: 1px;--tab-radius: 0.5rem;--font-family: Albert Sans}`,
        }}
      ></style>
    </>
  );
}
