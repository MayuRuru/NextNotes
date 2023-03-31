type Props = {
  promise: Promise<Book[]>;
};

import React from "react";

export default async function BookInsights({ promise }: Props) {
  const insights = await promise;

  const content = insights.map((insight) => {
    return (
      <article key={insight.id}>
        <h2 className="mt-4 text-2xl dark:text-white/90">{insight.title}</h2>
        <p className="mt-4 text-2xl dark:text-white/90">
          {insight.description}
        </p>
        <br />
      </article>
    );
  });

  return content;
}
