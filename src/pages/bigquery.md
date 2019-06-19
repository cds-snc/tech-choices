---
path: "/big-query"
title: Big Query
tags: ["static", "react"]
purpose: "page"
image: "../images/big-query.png"
---

## Big Query

Big Query is a platform as a service by Google for big data sets. You can use SQL on the data to extract information.

<div class="product">

### Pros

- Can handle very large sets of data (hundreds of GB and TB)

- Queries are fast compared to the amount of data

- Excellent for append only scenarios 

### Cons

- Very expensive. Each query will scan the entire table and not use an index. Currently each TB of data analyzed costs $5.

- Does not use indexes. Combined with the SQL syntax you may think you want to use it like a relational database, but you should not - that it not the use case.

- Update queries are very slow and will not work if a simulataneous look up is happening.

<div>
