import React from 'react'
import Layout from '../../components/Layout/layout'
import ResilifyScreen from "../../components/Resilify";


class Resilify extends React.Component {

    render() {
        return (
            <Layout extraHeader>
                <ResilifyScreen />
            </Layout>
        )
    }
}

export default Resilify