import Layout from "../components/layout";
import Container from "../components/container";
import Image from "next/image";

import {
  FaGithub,
  FaGithubAlt,
  FaLinkedin,
  FaTwitter,
  FaUser,
} from "react-icons/fa";

export default function About({ page, preview }) {
  return (
    <Layout preview={preview}>
      <Container>
        <article class="prose prose-xl">
          <h1>Over ons</h1>
          <p>Wij zijn CodeKlets. Bla bla blab lblabalbalab</p>
        </article>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="/images/team/bernard_400x400.jpg"
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  Bernard Kroes
                </h2>
                <h3 class="text-gray-500 mb-3">Host</h3>
                <p class="mb-4">
                  Van GFA-Basic toen tot Ruby, Swift en Objective-C nu. Old
                  school. Pragmatisch. It never hurts to help!
                </p>
                <span class="inline-flex">
                  <a class="text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="/images/team/johnny_400x400.jpg"
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  Johnny Dongelmans
                </h2>
                <h3 class="text-gray-500 mb-3">Host</h3>
                <p class="mb-4">
                  Ruby developer, doet onder andere dingen met beveiliging en
                  online identificatie.
                </p>
                <span class="inline-flex">
                  <a
                    href="https://www.linkedin.com/in/johnnydongelmans/"
                    className="text-gray-500"
                  >
                    <FaLinkedin />
                  </a>
                  <a class="text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="/images/team/pauline_400x400.jpg"
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  Pauline Vos
                </h2>
                <h3 class="text-gray-500 mb-3">Host</h3>
                <p class="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
                <span class="inline-flex">
                  <a class="text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="/images/team/kishen_400x400.jpg"
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  Kishen Simbhoedatpanday
                </h2>
                <h3 class="text-gray-500 mb-3">Host</h3>
                <p class="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
                <span class="inline-flex">
                  <a class="text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
            <div className="inline-flex shadow-lg  rounded-lg overflow-hidden h-40 w-40">
              <Image
                src="/images/team/bernard_400x400.jpg"
                width={160}
                height={160}
                alt="Picture of the Bernard Kroes"
                className="h-full w-full"
              />
            </div>

            <h2 className="mt-4 font-bold text-base">Bernard Kroes</h2>
            <h6 className="mt-2 text-sm font-medium">Host</h6>

            <p className="text-xs text-gray-500 text-center mt-3">
              Van GFA-Basic toen tot Ruby, Swift en Objective-C nu. Old school.
              Pragmatisch. It never hurts to help!
            </p>

            <ul className="flex flex-row mt-4 space-x-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/bernard-kroes-5050a82/"
                  className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/bernardkroes"
                  className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
            <div className="inline-flex shadow-lg rounded-lg overflow-hidden h-40 w-40">
              <Image
                src="/images/team/johnny_400x400.jpg"
                width={160}
                height={160}
                alt="Picture of the Johnny Dongelmans"
                className="h-full w-full"
              />
            </div>

            <h2 className="mt-4 font-bold text-base">Johnny Dongelmans</h2>
            <h6 className="mt-2 text-sm font-medium">Host</h6>

            <p className="text-xs text-gray-500 text-center mt-3">
              Ruby developer, doet onder andere dingen met beveiliging en online
              identificatie.
            </p>

            <ul className="flex flex-row mt-4 space-x-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/johnnydongelmans/"
                  className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jdongelmans"
                  className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
            <div className="inline-flex shadow-lg rounded-lg overflow-hidden h-40 w-40">
              <Image
                src="/images/team/pauline_400x400.jpg"
                width={160}
                height={160}
                alt="Picture of the Johnny Dongelmans"
                className="h-full w-full"
              />
            </div>

            <h2 className="mt-4 font-bold text-base">Pauline Vos</h2>
            <h6 className="mt-2 text-sm font-medium">Host</h6>

            <p className="text-xs text-gray-500 text-center mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim
              molestiae nulla.
            </p>

            <ul className="flex flex-row mt-4 space-x-2">
              <li>
                <a
                  href="https://twitter.com/vanamerongen"
                  className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/paulinepvos/"
                  className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/paulinevos"
                  className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.pauline-vos.nl"
                  className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
                >
                  <FaUser />
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
            <div className="inline-flex shadow-lg rounded-lg overflow-hidden h-40 w-40">
              <Image
                src="/images/team/kishen_400x400.jpg"
                width={160}
                height={160}
                alt="Picture of the Johnny Dongelmans"
                className="h-full w-full"
              />
            </div>

            <h2 className="mt-4 font-bold text-base">
              Kishen Simbhoedatpanday
            </h2>
            <h6 className="mt-2 text-sm font-medium">Host</h6>

            <p className="text-xs text-gray-500 text-center mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim
              molestiae nulla.
            </p>

            <ul className="flex flex-row mt-4 space-x-2">
              <li>
                <a
                  href="https://twitter.com/kishenpanday"
                  className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/kishensimbhoedatpanday/"
                  className="flex items-center justify-center h-8 w-8 border rounded-full  text-gray-800 border-gray-800"
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
            <div className="inline-flex shadow-lg rounded-lg overflow-hidden h-40 w-40">
              <Image
                src="/images/team/saber_400x400.jpg"
                width={160}
                height={160}
                alt="Picture of the Saber Karmous"
                className="h-full w-full"
              />
            </div>

            <h2 className="mt-4 font-bold text-base">Saber Karmous</h2>
            <h6 className="mt-2 text-sm font-medium">Host</h6>

            <p className="text-xs text-gray-500 text-center mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim
              molestiae nulla.
            </p>

            <ul className="flex flex-row mt-4 space-x-2">
              <li>
                <a
                  href="https://twitter.com/sdotone"
                  className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/saberkarmous/"
                  className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/saberone"
                  className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
