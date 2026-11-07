"use client";

import { Button, H2, Input, Textarea } from "@kduprey/ui";
import axios from "axios";
import type {
  ChangeEvent,
  ChangeEventHandler,
  SubmitEventHandler,
} from "react";
import { useState } from "react";
import { IconContext } from "react-icons";
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
    e: ChangeEvent<HTMLInputElement>
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

  const onSubmit: SubmitEventHandler = (e) => {
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
    <div id="contact">
      <H2 className="pb-4 text-center">Contact</H2>
      <form
        className="relative mx-auto flex w-full max-w-lg flex-wrap items-center justify-evenly gap-4"
        id="contact-form"
        onSubmit={onSubmit}
      >
        <Input
          className="hidden"
          name="age"
          onChange={handleChange}
          placeholder="Age"
          type="text"
          value={inputData.age}
        />
        <Input
          disabled={loading}
          name="name"
          onChange={handleChange}
          placeholder="Name"
          required
          type="text"
          value={inputData.name}
        />
        <Input
          disabled={loading}
          name="email"
          onChange={handleChange}
          placeholder="Email"
          required
          type="email"
          value={inputData.email}
        />
        <Textarea
          className="field-sizing-fixed"
          disabled={loading}
          name="message"
          onChange={handleChange}
          placeholder="Message"
          required
          rows={5}
          value={inputData.message}
        />

        <Button
          className="m-2"
          disabled={loading}
          id="btn-submit"
          type="submit"
        >
          {loading ? "Sending..." : "Send"}
          <IconContext.Provider
            value={{
              className: `ml-1 size-6 animate-spin ${loading ? "" : "hidden"}`,
            }}
          >
            <CgSpinner />
          </IconContext.Provider>
        </Button>

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
