import Image from "next/image";

const skills = ["C", "Python", "Java"];

export default function Home() {
  return (
    <section className="flex flex-col items-center gap-6 rounded-2xl bg-white p-10 shadow-md">
      <Image
        src="https://i.pravatar.cc/150"
        alt="头像"
        width={120}
        height={120}
        className="rounded-full"
        priority
      />
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-bold text-ink">夏蕴源</h1>
        <p className="text-lg text-ink/70">准大二代码练习生</p>
        <p className="max-w-md text-sm leading-7 text-ink/80">
          我是夏蕴源，目前就读于南京大学软工经济专业，正在学习web开发~
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-pink-100/50 px-4 py-2 text-base text-ink"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
