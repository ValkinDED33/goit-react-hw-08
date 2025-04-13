import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <PageTitle className={css.heading}>
        Welcome to Your Task Manager!{" "}
        <span role="img" aria-label="Wave icon" className={css.emoji}>
          👋
        </span>
      </PageTitle>
      <p className={css.paragraph}>
        Ready to get things done? 📝 Whether you’re planning your day or
        tracking your goals, this is the place to stay organized and efficient.
        Embrace productivity like never before! 🚀 Let’s make your to-do list
        not just a list, but a path to your success.{" "}
        <span className={css.highlight}>💡</span>
      </p>
      <p className={css.paragraph}>
        Our task manager is designed to bring simplicity and joy to your busy
        life. 🌟 Forget about clutter and distractions. Focus on what really
        matters, and check off those tasks with a smile{" "}
        <span className={css.emoji}>😄</span>. Stay on top of your goals with
        ease, and celebrate every achievement, no matter how big or small{" "}
        <span className={css.emoji}>🎉</span>.
      </p>
      <p className={css.paragraph}>
        So take a deep breath, relax <span className={css.emoji}>🌿</span>, and
        start tackling your tasks one by one. With every step forward, you’ll
        feel more accomplished. Ready to crush your goals?{" "}
        <span className={css.emoji}>💪</span>
      </p>
      <p className={css.promotion}>
        Don&rsquo;t wait! Start now and make the most of every day.
      </p>
    </div>
  );
}
