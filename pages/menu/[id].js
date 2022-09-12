import styles from "../../styles/menu.module.scss";
import { client } from "../../libs/client";
import Link from "next/link";
//SSG

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "menu", contentId: id });

  return {
    props: {
      menu: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "menu" });
  const paths = data.contents.map((content) => `/menu/${content.id}`);

  return {
    paths,
    fallback: false,
  };
};

export default function MenuId({ menu }) {
  return (
    <div className={styles.body}>
      <main className={styles.main}>
        {/* <h1 className={styles.title}>{menu.title}</h1> */}
        {/* <p className={styles.publishedAt}>{menu.publishedAt}</p> */}
        <div dangerouslySetInnerHTML={{ __html: `${menu.body}` }}></div>
        <Link href="/">
          <div>
            <a className={styles.button}>back</a>
          </div>
        </Link>
      </main>
    </div>
  );
}
