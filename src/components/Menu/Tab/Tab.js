import { TabContainer } from "./StyledTab";

function Tab(props) {
    return(
    <>
    <TabContainer>
        {props.TabIcon}
        {props.TabText}
    </TabContainer>
    </>
    )
};

export default Tab;