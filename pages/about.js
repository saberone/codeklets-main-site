import Layout from "../components/layout";
import Container from "../components/container";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
            <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2"
                alt=""
                className="h-full w-full"
              />
            </div>

            <h2 className="mt-4 font-bold text-xl">Bernard Kroes</h2>
            <h6 className="mt-2 text-sm font-medium">Host</h6>

            <p className="text-xs text-gray-500 text-center mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim
              molestiae nulla.
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
            <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2"
                alt=""
                className="h-full w-full"
              />
            </div>

            <h2 className="mt-4 font-bold text-xl">Johnny Dongelmans</h2>
            <h6 className="mt-2 text-sm font-medium">Host</h6>

            <p className="text-xs text-gray-500 text-center mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim
              molestiae nulla.
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
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
            <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2"
                alt=""
                className="h-full w-full"
              />
            </div>

            <h2 className="mt-4 font-bold text-xl">Pauline Vos</h2>
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
            <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2"
                alt=""
                className="h-full w-full"
              />
            </div>

            <h2 className="mt-4 font-bold text-xl">Kishen Simbhoedatpanday</h2>
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
                  className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
            <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2"
                alt=""
                className="h-full w-full"
              />
            </div>

            <h2 className="mt-4 font-bold text-xl">Saber Karmous</h2>
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
