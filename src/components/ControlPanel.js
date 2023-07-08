import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const tabs = () => (
    <Tabs>
        <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
            <h2>any content 1</h2>
        </TabPanel>
        <TabPanel>
            <h2>any content 2</h2>
        </TabPanel>
    </Tabs>
)

export default tabs;