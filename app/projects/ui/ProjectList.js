"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { useLoading } from "@/utils/hooks/LoadingContext";
import styles from "@/components/styles/Projects.module.css";

export default function ProjectList({ projects }) {
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
            return <ProjectCard key={key} project={project} />;
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
        <div className="flex flex-col gap-[20px] w-[300px]">
          <Link
            href="/contact"
            className="readMore flex flex-row justify-between"
          >
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
          <Link
            href="/career"
            className="readMore flex flex-row justify-between"
          >
            Join us
            <div className="icon">
              <Image
                src="/images/arrow.svg"
                alt="Arrow icon"
                width={40}
                height={40}
              />
            </div>
          </Link>
          <Link
            href="/thoughts"
            className="readMore flex flex-row justify-between"
          >
            Blog
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
      </div>
    </section>
  );
}
