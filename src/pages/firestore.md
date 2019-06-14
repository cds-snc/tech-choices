---
path: "/firestore"
title: Firestore
tags: ["database"]
slug: "firestore"
purpose: "page"
date: "2019-01-01"
---

## Firestore

<div class="product">

### Pros
- Quick setup

### Cons

- [Index limits](https://cloud.google.com/datastore/docs/concepts/indexes#index_limits) these add up when creating composite indexes
  Limited search capabilities “Cloud Firestore doesn't support native indexing or search for text fields in documents” see https://firebase.google.com/docs/firestore/solutions/search

- Or in WHERE clause “Since OR queries can often be emulated by doing multiple queries at once, we don't consider them to be blocking most apps from using Firestore.” see https://github.com/firebase/firebase-js-sdk/issues/321#issuecomment-450967288

- Query select performance can’t select only (x) fields with Client version
  Has decent support for [REST](https://firebase.google.com/docs/firestore/reference/rest) but not so much for GraphQL

<div>
