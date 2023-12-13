"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import Image from "next/image";
import { useLoading } from "@/utils/hooks/LoadingContext";

import styles from "@/components/styles/Projects.module.css";

export default function ServiceContent({ projects }) {
  const { setLoading } = useLoading();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <section className={styles.projectGrid}>
      {projects && (
        <>
          {projects.map((project, key) => {
            let counter = 500;
            const style = {
              animation: `fadeInUp 1s ${counter * key}ms forwards ease-in-out`,
              opacity: 0,
            };
            return <ProjectCard style={style} key={key} project={project} />;
          })}
        </>
      )}
      <div className={styles.lastitem}>
        <h2 className={styles.projectName}>
          Well... this is awkward... You&apos;ve reached the end!
        </h2>
        <p className={styles.subheading}>
          If you like what you see, contact us and enter our project hall of
          fame!
        </p>
        <Link href="/contact" className="readMore">
          Contact us
          <div className="icon">
            <Image
              src="/images/arrow.svg"
              alt="Arrow icon"
              width={40}
              height={40}
            />
          </div>
        </Link>
      </div>
    </section>
  );
}
