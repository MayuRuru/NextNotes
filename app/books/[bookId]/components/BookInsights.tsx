type Props = {
  promise: Promise<Post[]>;
};

import React from "react";

export default async function BookInsights({ promise }: Props) {
  const insights = await promise;

  const content = insights.map((insight) => {
    return (
      <article key={insight.id}>
        <h2>{insight.title}</h2>
        <p>{insight.body}</p>
        <br />
      </article>
    );
  });

  return content;
}
