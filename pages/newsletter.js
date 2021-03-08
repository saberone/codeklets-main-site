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
        {!subscribed ? (
          <div className="max-w-2xl mx-auto">
            <p className="pb-8">
              Schrijf je hier in voor de CodeKlets Developer nieuwsbrief. Een
              tweewekelijkse nieuwsbrief met interessante links naar zaken die
              developers interessant vinden, en een klein beetje duiding op zijn
              CodeKlets'.
            </p>
            <Subscribe onSubscribed={handleSubscribed}></Subscribe>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <h3 className="mb-8 text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
              Bedankt voor het abonneren!
            </h3>
            <p>
              We hebben een mail verstuurd waarmee je de boel kunt bevestigen.
              Check je mailbox, en controlleer voor de zekerheid ook je spam
              folder.
            </p>
          </div>
        )}
      </Container>
    </Layout>
  );
}

export default Newsletter;
