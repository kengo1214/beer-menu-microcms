import { client } from "../libs/client";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
//SSG

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "menu" });
  return {
    props: {
      menu: data.contents,
    },
  };
};

export default function Home({ menu }) {
  return (
    <div className={styles.home}>
      <h1>ドリンクメニュー</h1>
      <div className={styles.main}>
        {menu.map((menu) => (
          <li className={styles.menuTitle} key={menu.id}>
            <Link href={`menu/${menu.id}`}>
              <a className={styles.menu} href="">{menu.title}</a>
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}
