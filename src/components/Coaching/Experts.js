import React from "react";
import {Link} from "gatsby";
import {expertsData, getCloudIDFromImageName} from "../../helper/helper";
import CLImage from "../../helper/CLImage";
import {Helmet} from "react-helmet";


const experts = expertsData;

class Experts extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="experts-navigation-wrapper">
                <Helmet title="Resiliens">
                    <meta charSet="utf-8"/>
                    <title>Resilens - Experts in Evidence Based Therapy</title>
                    <meta
                        name="keywords"
                        content="Resilens - Experts in Evidence Based Therapy, DBT, CBT, ACT, CFT, Compassion, Resilience, Motivational Interviewing, Cognitive Behavioral Therapy, Dialectic Behavior Therapy, Family therapy, Interpersonal psychotherapy, Exposure Therapy, MBSR, MBCT, Functional Family Therapy"
                    />
                </Helmet>
                <div className="keen-slider">
                    {experts?.map(expert =>
                        <Link to={`/expert/${expert.slug}`} className="expert-container">
                            <div className="info">
                                <div className="img">
                                    <div className="expert-img">
                                        <CLImage
                                            cloudId={getCloudIDFromImageName(
                                                expert.img,
                                                "coaching",
                                                'experts',
                                            )}
                                            options={{
                                                imageWidth: 150,imageHeight: 150
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <p className="name base-text">{expert.name}</p>
                                        <p className="expertise para-text">{expert.expertise}</p>
                                    </div>
                                </div>

                                <p className="description para-text">{expert.description}</p>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        )
    }
}

export default Experts;
