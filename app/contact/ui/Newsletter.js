"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./styles/Newsletter.module.css";
import Image from "next/image";
import Script from "next/script";
import { countries } from "@/utils/data/countries";
import { subscribeToMailchimp } from "@/actions/actions";

export default function Newsletter() {
  const services = [
    "Web Development",
    "Print Design",
    "E-Commerce",
    "Copywriting",
    "Web Design",
    "Packaging",
    "Motion Design",
    "Social Media",
    "Branding",
  ];
  const [country, setCountry] = useState("Select country (optional)");
  const [isCountriesOpen, setIsCountriesOpen] = useState(false);
  const [response, setResponse] = useState({});
  const [captchaToken, setCaptchaToken] = useState(null);
  const select = useRef();
  const form = useRef();

  const handleOptionSelect = (option) => {
    setCountry(option);
    select.current.value = option;
    setIsCountriesOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { message, status } = await subscribeToMailchimp(
      new FormData(form.current)
    );
    const rawFormData = {
      email: form.current.email.value,
      firstName: form.current.firstName.value,
      lastName: form.current.lastName.value,
      country: form.current.country.value,
      services: Array.from(form.current.service)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value),
      budget: form.current.budget.value,
      message: form.current.message.value,
    };

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...rawFormData, captchaToken }),
    });

    const result = await res.json();

    if (result.success) {
      console.log("Email sent successfully!");
    } else {
      console.log("Email not sent, but submission may be stored");
    }
    setResponse({ message, status });
    if (status === "error") {
      return;
    } else {
      form.current.reset();
      setCountry("Select country (optional)");
    }
  };

  useEffect(() => {
    const loadReCaptcha = () => {
      grecaptcha.ready(() => {
        grecaptcha
          .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {
            action: "submit",
          })
          .then((token) => {
            setCaptchaToken(token);
          });
      });
    };

    if (typeof grecaptcha !== "undefined") {
      loadReCaptcha();
    }
  }, []);

  return (
    <form className={styles.form} ref={form} onSubmit={handleSubmit}>
      {response.status && (
        <p
          className={`${
            response.status === "error" ? styles.error : styles.success
          } ${styles.response}`}
        >
          {response.message}
        </p>
      )}
      <div className={styles.inputWrap}>
        <label htmlFor="firstName">First Name*</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          required
          placeholder="Enter your first name here..."
        />
      </div>
      <div className={styles.inputWrap}>
        <label htmlFor="lastName">Last Name*</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Enter your last name here..."
        />
      </div>
      <div className={styles.inputWrap}>
        <label htmlFor="email">E-mail*</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Enter your e-mail address..."
        />
      </div>
      <div className={`${styles.inputWrap} ${styles.countryInputWrap}`}>
        <label htmlFor="country">Select Country</label>
        <div className={styles.countryFieldWrap}>
          <input
            ref={select}
            name="country"
            id="country"
            className={styles.countrySelect}
            style={{
              color:
                country === "Select country (optional)" ? "#d0d0d0" : "#000",
            }}
            defaultValue={country}
            readOnly
            onClick={() => setIsCountriesOpen(!isCountriesOpen)}
          />
          <Image
            src="/images/arrow-down.svg"
            alt="drop icon"
            width={28}
            height={28}
            style={{
              transform: isCountriesOpen ? "rotate(-180deg)" : "rotate(0)",
            }}
          />
        </div>
        {isCountriesOpen && (
          <div data-lenis-prevent className={styles.selectWrap}>
            <div className={styles.selectList}>
              {countries.map((option, index) => (
                <div key={index} onClick={() => handleOptionSelect(option)}>
                  {option}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <p className={styles.fieldHeading}>Services you are looking for*</p>
      <div className={styles.serviceWrap}>
        {services.map((service) => (
          <div key={service} className={styles.singleService}>
            <input
              type="checkbox"
              name="service"
              value={service}
              id={service.split(" ").join("-").toLowerCase()}
            />
            <label htmlFor={service.split(" ").join("-").toLowerCase()}>
              {service}
            </label>
          </div>
        ))}
      </div>
      <p className={styles.fieldHeading}>Choose budget*</p>
      <div className={styles.budgetWrap}>
        <div className={styles.singleBudget}>
          <input
            type="radio"
            name="budget"
            id="10-30"
            value="10k-30k"
            defaultChecked
          />
          <label htmlFor="10-30">$10k-$30k</label>
        </div>
        <div className={styles.singleBudget}>
          <input type="radio" name="budget" id="30-50" value="30k-50k" />
          <label htmlFor="30-50">$30k-$50k</label>
        </div>
        <div className={styles.singleBudget}>
          <input type="radio" name="budget" id="50k+" value="50k+" />
          <label htmlFor="50k+">$50k+</label>
        </div>
      </div>
      <p className={styles.fieldHeading}>Comment</p>
      <textarea
        className={styles.message}
        name="message"
        id="message"
        cols="30"
        rows="4"
      ></textarea>
      <button type="submit" className={`readMore ${styles.submitBtn}`}>
        Submit
        <div className="icon">
          <Image
            src="/images/arrow.svg"
            alt="Arrow icon"
            width={40}
            height={40}
          />
        </div>
      </button>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="lazyOnload"
      />
    </form>
  );
}
