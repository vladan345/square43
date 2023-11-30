"use client";
import React, { useEffect, useState } from "react";
import { getProjectsByService, getCurrentService } from "@/utils/data/getData";

import ProjectCard from "@/components/ProjectCard";
import styles from "@/styles/section-css/projects/Projects.module.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import { useLoading } from "@/utils/hooks/LoadingContext";

export default function Page({ params }) {
  const { setLoading } = useLoading();
  const currentService = getCurrentService(params.service);
  const projects = getProjectsByService(params.service);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Head>
        <title>Square43 Studio | {currentService?.name}</title>
      </Head>
      <main>
        <div className={styles.Projects}>
          <div className={styles.wrapper}>
            <div className={styles.projectsWrap}>
              <h1 className={styles.title}> {currentService?.name}</h1>
              <p className={styles.subheading}>{currentService?.description}</p>

              <section className={styles.projectGrid}>
                {projects && (
                  <>
                    {projects.map((project, key) => {
                      let counter = 500;
                      const style = {
                        animation: `fadeInUp 1s ${
                          counter * key
                        }ms forwards ease-in-out`,
                        opacity: 0,
                      };
                      return (
                        <ProjectCard
                          style={style}
                          key={key}
                          project={project}
                        />
                      );
                    })}
                  </>
                )}
                <div className={styles.lastitem}>
                  <h2 className={styles.projectName}>
                    Well... this is awkward... You&apos;ve reached the end!
                  </h2>
                  <p className={styles.subheading}>
                    If you like what you see, contact us and enter our project
                    hall of fame!
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
