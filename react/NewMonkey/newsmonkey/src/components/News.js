import React, { Component } from "react";
import Newsitem from "./Newsitem";

let articles = [
  {
    article_id: "b2ca6d3f71fc7308e49c9bf3edb1ee58",
    title: "Paul Heyman makes huge statement on Cody Rhodes ahead of Wrestlemania 41",
    link: "https://www.indiatvnews.com/sports/other/paul-heyman-makes-huge-statement-on-cody-rhodes-ahead-of-wrestlemania-41-2025-04-17-986057",
    description: "The stage is set for the showcase of immortals, WrestleMania 41. The marquee event will be held at the Allegiant Stadium in Las Vegas on April 19 and 20.",
    image_url: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2025/04/untitled-design-2025-04-17t212611-1744905374.jpg",
  },
  {
    article_id: "93e473db491e4f6446ac99bfba941534",
    title: "How Kolkata Knight Riders Can Qualify For IPL 2025 Playoffs",
    link: "https://news.abplive.com/photo-gallery/sports/ipl-how-kolkata-knight-riders-can-qualify-for-ipl-2025-playoffs-1765992",
    description: "How Kolkata Knight Riders Can Qualify For IPL 2025 Playoffs",
    image_url: "https://feeds.abplive.com/onecms/images/uploaded-images/2025/04/17/57abbc501a0bbf6c9374aa18a80e8ec3174490459493624_original.jpg",
  },
  {
    article_id: "001c3fb81594733122b2e3591463b765",
    title: "Crunchyroll streams Attack on Titan anime compilation film in April 2025",
    link: "https://www.sportskeeda.com/anime/news-crunchyroll-streams-attack-titan-anime-compilation-film-april-2025",
    description: "Crunchyroll release date of the Attack on Titan anime compilation film officially announced as 8 PM EDT.",
    image_url: "https://staticc.sportskeeda.com/editor/2025/04/171aa-17449053655577-1920.jpg",
  }
];

export default class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">NewsMonkey - Top Headlines</h2>
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.article_id}>
                <Newsitem
                  title={element.title.slice(0, 40)}
                  description={element.description.slice(0, 100)}
                  imageUrl={element.image_url}
                  newsUrl={element.link}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
