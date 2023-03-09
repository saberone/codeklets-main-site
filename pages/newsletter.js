import Layout from "../components/layout";
import Container from "../components/container";
import Subscribe from "../components/subscribe";
import { useState } from "react";

function Newsletter({ preview }) {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribed() {
    setSubscribed(true);
  }

  return (
    <Layout preview={preview}>
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center flex-col">
            <h1
              className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold
 tracking-tight mb-2 sm:mb-3 text-gray-900"
            >
              CodeKlets Developer nieuwsbrief
            </h1>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="mb-8 text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
            Bye bye nieuwsbrief
          </h3>
          <p>
            We hebben helaas de conclusie moeten trekken dat we te weinig tijd
            en energie hadden om de CodeKlets nieuwsbrief te blijven maken.
            Misschien dat we in de toekomst, de nieuwsbrief nieuw leven in
            blazen.
          </p>
        </div>
      </Container>
    </Layout>
  );
}

export default Newsletter;
