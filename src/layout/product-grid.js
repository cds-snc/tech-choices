import styled from "styled-components";
import {
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea
} from "styled-system";

import { Box } from "../style/";

export const template = {
  mobile: {
    rows: "repeat(1, 1fr)",
    columns: "repeat(1, 1fr)"
  },
  tablet: {
    rows: "repeat(1, 1fr)",
    columns: "repeat(3, 1fr)"
  },
  desktop: {
    rows: "repeat(1, 1fr)",
    columns: "repeat(3, 1fr)"
  }
};

export const Grid = styled(Box)(
  { display: "grid" },
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea
);

Grid.displayName = "Grid";

Grid.propTypes = {
  ...gridGap.propTypes,
  ...gridColumnGap.propTypes,
  ...gridRowGap.propTypes,
  ...gridColumn.propTypes,
  ...gridRow.propTypes,
  ...gridAutoFlow.propTypes,
  ...gridAutoColumns.propTypes,
  ...gridAutoRows.propTypes,
  ...gridTemplateColumns.propTypes,
  ...gridTemplateRows.propTypes,
  ...gridTemplateAreas.propTypes,
  ...gridArea.propTypes
};
