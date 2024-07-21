"use client";

import type {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
} from "react";

import axios from "axios";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";

import { Socials } from "./Socials";

export const Contact = () => {
  const [inputData, setInputData] = useState({
    age: undefined,
    email: "",
    message: "",
    name: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [usrMsg, setUsrMsg] = useState("");

  const handleChange: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setInputData({ ...inputData, name: value });
        break;
      case "email":
        setInputData({ ...inputData, email: value });
        break;
      case "message":
        setInputData({ ...inputData, message: value });
        break;
      default:
        break;
    }
  };

  const onSubmit: FormEventHandler = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post("/api/contact", inputData)
      .then((res) => {
        if (res.status === 200) {
          setUsrMsg("Your message has been sent!");
        } else {
          setUsrMsg("Something went wrong!");
        }
        setSuccess(true);
        setInputData({
          age: undefined,
          email: "",
          message: "",
          name: "",
        });
        setLoading(false);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      })
      .catch((err: unknown) => {
        console.error(err);
      });
  };

  return (
    <div className="" id="contact">
      <h2 className="py-3 text-center font-bold">Contact</h2>
      <form
        className="relative mx-auto flex w-full max-w-lg flex-wrap items-center justify-evenly gap-4"
        id="contact-form"
        onSubmit={onSubmit}
      >
        <input
          className="hidden"
          name="age"
          onChange={handleChange}
          placeholder="Age"
          type="text"
          value={inputData.age}
        />
        <input
          className="input form-input"
          disabled={loading}
          name="name"
          onChange={handleChange}
          placeholder="Name"
          required
          type="text"
          value={inputData.name}
        />
        <input
          className="input form-input"
          disabled={loading}
          name="email"
          onChange={handleChange}
          placeholder="Email"
          required
          type="email"
          value={inputData.email}
        />
        <div className="mx-auto flex flex-col items-center gap-4">
          <textarea
            className="input form-textarea"
            disabled={loading}
            name="message"
            onChange={handleChange}
            placeholder="Message"
            required
            value={inputData.message}
          />

          <button
            className="m-2 flex "
            disabled={loading}
            id="btn-submit"
            type="submit"
          >
            {loading ? "Sending..." : "Send"}

            <CgSpinner
              className={`ml-1 size-6 animate-spin text-gray-500 ${
                loading ? "" : "hidden"
              }`}
            />
          </button>
        </div>

        <p
          className={`absolute -bottom-6 font-light transition-opacity ease-in md:-right-28 md:bottom-auto ${
            success ? "opacity-100" : "hidden opacity-0"
          }`}
          id="usr-msg"
        >
          {usrMsg}
        </p>
      </form>
      <Socials />
    </div>
  );
};
