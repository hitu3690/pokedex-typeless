import React from "react";
import { ajax } from "rxjs/internal-compatibility";
import { from } from "typeless/rx";

import NewsHeaderView from "./components/NewsHeaderView";
import {
  CardNews,
  HeaderNews,
  NewsActions,
  NewsState,
  useNewsModule,
} from "./interface";

/** epic */
useNewsModule.epic();
// .on(NewsActions.startLoadToNews, () => {
//   return fetchNewsData().subscribe((res) => {
//     convertToNewsState(res)
//   })
// })

/** reducer */
const initialState: NewsState = {
  headerNews: [] as HeaderNews[],
  cardNews: [] as CardNews[],
};
useNewsModule
  .reducer(initialState)
  .on(NewsActions.setNewsState, (state, { news: { cardNews, headerNews } }) => {
    state.cardNews = cardNews;
    state.headerNews = headerNews;
    console.log(state);
  })
  .on(NewsActions.startLoadToNews, () => {
    ajax.getJSON("/rss").subscribe((res) => {
      console.log(res);
    });
  });

export default function NewsModule() {
  useNewsModule();

  return <NewsHeaderView />;
}
