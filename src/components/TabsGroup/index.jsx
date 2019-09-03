import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Tab from "../Tab";
import { connect } from "react-redux";

import { changeFasterOrCheaper } from "../../store/fastesOrCheaper/actions";

const StyledTabsWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: 50px;
  display: flex;
`;

const TabsGroup = props => {
  return (
    <StyledTabsWrapper>
      <Tab
        text="Самый дешевый"
        borderRadius="5px 0px 0px 5px"
        sortBy="cheaper"
        currentSortBy={props.sortBy}
        changeFasterOrCheaper={props.changeFasterOrCheaper}
      />
      <Tab
        text="Самый быстрый"
        borderRadius="0px 5px 5px 0px"
        sortBy="fastes"
        currentSortBy={props.sortBy}
        changeFasterOrCheaper={props.changeFasterOrCheaper}
      />
    </StyledTabsWrapper>
  );
};

const mapStateToProps = state => {
  return {
    sortBy: state.fastesOrCheaper.sortBy
  };
};

const mapDispatchToProps = {
  changeFasterOrCheaper
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabsGroup);

TabsGroup.propTypes = {
  sortBy: PropTypes.string.isRequired,
  changeFasterOrCheaper: PropTypes.func.isRequired
};
