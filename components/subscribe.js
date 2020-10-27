import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import fetch from "isomorphic-unfetch";

export default function Subscribe(props) {
  const [message, setMessage] = useState("");
  const { register, handleSubmit, watch, errors } = useForm();

  function handleSubscribe() {
    props.onSubscribed();
  }

  const onSubmit = async (data) => {
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      setMessage(error);

      return;
    }

    handleSubscribe();
  };

  return (
    <div className="flex justify-center">
      <form
        className="w-full max-w-lg"
        method="post"
        id="subscribeForm"
        name="subscribeForm"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="member_first_name"
            >
              Voornaam
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Julia"
              name="firstName"
              id="member_first_name"
              ref={register}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="member_last_name"
            >
              Achternaam
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Trabelsi"
              name="lastName"
              id="member_last_name"
              ref={register}
            />
          </div>

          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="member_email"
            >
              E-mail
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border  ${
                errors["email"] ? "border-red-600" : ""
              }    border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
              id="grid-password"
              type="email"
              placeholder="Jouw email adres..."
              name="email"
              id="member_email"
              ref={register({ required: true })}
            />
            {errors["email"] && (
              <p className="text-red-500 text-xs italic">
                Vul aub je e-mail adres in.
              </p>
            )}
          </div>

          <div className="w-full px-3 py-4">
            <p className="text-gray-600 text-xs italic">
              {message
                ? message
                : "We sturen je alleen de nieuwsbrief, geen spam. Beloofd!"}
            </p>
          </div>
          <div className="w-full px-3">
            <div className="flex justify-end">
              <button
                className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
                onClick={handleSubmit(onSubmit)}
              >
                Schrijf je in
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
