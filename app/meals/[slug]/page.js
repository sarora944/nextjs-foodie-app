import { getMeal } from "@/lib/meals";
import style from "./page.module.css";
import Image from "next/image";

export default function FoodPage({ params }) {
    const meal = getMeal(params.slug)
    meal.instructions = meal.instructions.replace(/\n/g,'<br/>')
  return (
    <>
      <header className={style.header}>
        <div className={style.image}>
          <Image fill src={meal.image} />
        </div>
        <div className={style.headerText}>
          <div>{meal.title}</div>
          <p className={style.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={style.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={style.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
