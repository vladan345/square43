"use client";
import styles from "./styles/Newsletter.module.css";
import { countries } from "@/utils/data/countries";
import { useState, useRef } from "react";
import Image from "next/image";

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
  const select = useRef();
  const form = useRef();
  const handleOptionSelect = (option) => {
    setCountry(option);
    // Set the value of the select element here
    select.current.value = option;
    setIsCountriesOpen(false);
  };
  return (
    <form
      className={styles.form}
      ref={form}
      action={async (formData) => {
        const { message, status } = await subscribeToMailchimp(formData);
        setResponse({ message, status });
        if (status == "error") {
          return;
        } else {
          form.current.reset();
        }
      }}
    >
      {response.status && (
        <p
          className={`${
            response.status == "error" ? styles.error : styles.success
          } ${styles.response}`}
        >
          {response.message}
        </p>
      )}
      <div className={styles.inputWrap}>
        <input
          type="text"
          name="firstName"
          id="firstName"
          required
          placeholder="First name*"
        />
      </div>
      <div className={styles.inputWrap}>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last name (optional)"
        />
      </div>
      <div className={styles.inputWrap}>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Email*"
        />
      </div>
      <div className={`${styles.inputWrap} ${styles.countryInputWrap}`}>
        <input
          ref={select}
          name="country"
          id="country"
          className={styles.countrySelect}
          style={{
            color: country == "Select country (optional)" ? "#d0d0d0" : "#000",
          }}
          defaultValue={country}
          readOnly
          onClick={() => setIsCountriesOpen(!isCountriesOpen)}
        />
        <Image
          src="/images/arrow-down.svg"
          alt="drop icon"
          width={40}
          height={40}
          style={{
            transform: isCountriesOpen ? "rotate(-180deg)" : "rotate(0)",
          }}
        />

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

      <p className={styles.fieldHeading}>Choose services*</p>
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

      <textarea
        className={styles.message}
        name="message"
        id="message"
        cols="30"
        rows="3"
        placeholder="Comment"
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
    </form>
  );
}
