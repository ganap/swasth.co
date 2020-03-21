import React from 'react'
import Layout from '../../../components/layout'
import LifeCoachAbout from '../../../components/LifeCoachAbout'


class HomeIndex extends React.Component {

  render() {
    return (
      <Layout
        show
        coachingFooter
      >
        <LifeCoachAbout />
      </Layout>
    )
  }
}

export default HomeIndex