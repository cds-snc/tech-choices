import React, { useState, useEffect, createRef } from "react";
import {
  InstantSearch,
  Index,
  Hits,
  connectStateResults
} from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";
import { Root, HitsWrapper, PoweredBy } from "./styles";
import Input from "./input";
import * as hitComps from "./hitComps";

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res && res.nbHits > 0 ? children : `No results for '${state.query}'`
);

const Stats = connectStateResults(
  ({ searchResults: res }) =>
    res && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`
);

const useClickOutside = (ref, handler, events) => {
  if (!events) events = [`mousedown`, `touchstart`];
  const detectClickOutside = event =>
    !ref.current.contains(event.target) && handler();
  useEffect(() => {
    for (const event of events)
      document.addEventListener(event, detectClickOutside);
    return () => {
      for (const event of events)
        document.removeEventListener(event, detectClickOutside);
    };
  });
};

const APP_ID = process.env.GATSBY_ALGOLIA_APP_ID
  ? process.env.GATSBY_ALGOLIA_APP_ID
  : "";

const SEARCH_KEY = process.env.GATSBY_ALGOLIA_SEARCH_KEY
  ? process.env.GATSBY_ALGOLIA_SEARCH_KEY
  : "";

export default function Search({ indices, collapse, hitsAsGrid }) {
  const ref = createRef();
  const [query, setQuery] = useState(``);
  const [focus, setFocus] = useState(false);

  if (!APP_ID || !SEARCH_KEY) {
    return null;
  }

  let searchClient = null;

  try {
    searchClient = algoliasearch(APP_ID, SEARCH_KEY);
  } catch (e) {
    console.log(e.message);
  }

  if (!searchClient) {
    return null;
  }

  useClickOutside(ref, () => setFocus(false));
  return (
    <div>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
        root={{ Root, props: { ref } }}
      >
        <Input onFocus={() => setFocus(true)} {...{ collapse, focus }} />

        <HitsWrapper
          className="hits-wrapper"
          show={query.length > 0 && focus}
          asGrid={hitsAsGrid}
        >
          {indices.map(({ name, title, hitComp }) => (
            <Index key={name} indexName={name}>
              <header>
                <h3>{title}</h3>
                <Stats />
              </header>
              <Results>
                <Hits hitComponent={hitComps[hitComp](() => setFocus(false))} />
              </Results>
            </Index>
          ))}
          <PoweredBy />
        </HitsWrapper>
      </InstantSearch>
    </div>
  );
}
