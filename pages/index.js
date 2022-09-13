import { client } from "../libs/client";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
//SSG

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "menu" });
  // console.log(data);
  return {
    props: {
      menu: data.contents,
    },
  };
};

export default function Home({ menu }) {
  return (
    <div className={styles.home}>
      <div className={styles.main}>
        <h1>ドリンクメニュー</h1>
        <div className={styles.menuBox}>
          {menu.map((menu) => (
            <li className={styles.menuTitle} key={menu.id}>
              <Link href={`menu/${menu.id}`}>
                <a className={styles.menu} href="">
                  {menu.title}
                </a>
              </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
