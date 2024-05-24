import MealsGrid from "@/components/meals/meals-grid";
import style from "./page.module.css";
import Link from "next/link";
import { getmeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals(){
    const meals = await getmeals();
    return <MealsGrid meals={meals} />
}
export default function MealsPage() {
  return (
    <>
      <header className={style.header}>
        <h1>Delicisous meals create <b className={style.highlight}>by you.</b></h1>
        <p className={style.cta}>
          <Link href={"meals/share"}>Share your favourite recipe</Link>
        </p>
      </header>
      <main className={style.main}>
        <Suspense fallback={<p className={style.loading}>Fetching Meals...</p>}>
            <Meals />
        </Suspense>
      </main>
    </>
  );
}
