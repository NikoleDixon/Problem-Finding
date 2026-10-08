import { Evidence } from "./components/Evidence";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { References } from "./components/References";
import { Spectrum } from "./components/Spectrum";
import { Stories } from "./components/Stories";
import { Verdict } from "./components/Verdict";
import { WhatIs } from "./components/WhatIs";

export default function App() {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <WhatIs />
        <Spectrum />
        <Stories />
        <Evidence />
        <Verdict />
      </main>
      <References />
    </>
  );
}
