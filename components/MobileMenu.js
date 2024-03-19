import styles from "./styles/MobileMenu.module.css";
import Link from "next/link";
import { useLoading } from "../utils/hooks/LoadingContext";
import { useRouter } from "next/navigation";

function MobileMenu({ stateChange, ...props }) {
  const { setLoading } = useLoading();
  const router = useRouter();

  const handleClick = (e) => {
    document.body.style.overflow = "auto";
    stateChange(false);
    setLoading(true);
    e.preventDefault();
    let link = e.currentTarget.attributes[1].value;
    setTimeout(() => {
      if (link === "/services" || link === "/projects") {
        router.push(link);
      } else if (link === "/") {
        router.push(link);
        setOpened(false);
        setLoading(false);
      } else {
        router.push(link);
        setLoading(false);
      }
    }, 2000);
  };

  return (
    <div style={props.style} className={styles.MobileMenu}>
      <p className={styles.name}>square43</p>
      <nav className={styles.nav}>
        <ul>
          {props.linkList.map((element) => (
            <li key={element.link} className={styles.listItem}>
              <Link
                onClick={handleClick}
                href={`${element.href}`}
                className={styles.link}
              >
                {element.link}
              </Link>
            </li>
          ))}
          <li className={styles.listItem}>
            <Link href="/ecom43" className={styles.link} onClick={handleClick}>
              ECOM43
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.socials}>
        <a
          className={styles.socialLink}
          target="_blank"
          href="https://www.instagram.com/square43studio/"
        >
          Instagram
        </a>

        <a
          className={styles.socialLink}
          target="_blank"
          href="https://www.facebook.com/Square43-Studio-110282941905781/"
        >
          Facebook
        </a>

        <a
          className={styles.socialLink}
          target="_blank"
          href="https://www.linkedin.com/company/square43"
        >
          Linked In
        </a>
      </div>
    </div>
  );
}

export default MobileMenu;
