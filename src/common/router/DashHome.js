import React from 'react';
import { Layout } from 'antd';
import DashboardRoutes from "./DashboardRoutes";
import { ScrollContext } from 'react-router-scroll-4';
const { Content,Header} = Layout;


class DashHome extends React.Component{
    render() {
        return <div>
            <Layout>
                <div>
                    <Content>
                        <DashboardRoutes/>

                    </Content>
                </div>
            </Layout>
        </div>
    }
}

//
// function goToRoute() {
//     history.push('/cabout');
// }
//
// function goToRoute2() {
//     history.push('/');
// }

export default DashHome;