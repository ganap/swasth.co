import React from "react";
import About from "./About";
import Education from "./Education";
import HonorsAwards from "./HonorsAwards";
import {getCloudIDFromImageName} from "../../../helper/helper";
import CLImage from "../../../helper/CLImage";

class ProfileData extends React.Component {
    constructor(props) {
        super(props);

    }


    renderBook = book => <>
        {book?.image ?
            <CLImage
                className="program-img"
                cloudId={getCloudIDFromImageName(
                    book?.image,
                    "coaching",
                    'png',
                )}
            /> : null}
        <div style={{marginBottom: 30,marginTop: 10}}>
            <a
                className="book-text"
                style={{fontSize: 18}}
                href={book.resource}
                target="_blank"
            >
                {book.title}
            </a>
            <p className="light-text">
                {book.shortDescription}
            </p>
        </div>
    </>

    render() {
        const {provider} = this.props;
        const links = provider?.links;
        const books = provider?.books;
        return (
            <div className="profile-data">

                <div className="profile-data-section-1">
                    <div className="profile-section">
                        <About provider={provider}/>
                        <Education provider={provider}/>
                        <HonorsAwards provider={provider}/>
                    </div>
                </div>

                <div className="profile-data-section-2">
                    <div className="profile-section">
                        <div className="location-section">
                            <div className="profile-data-content">
                                {links?.length ?
                                <div className="profile-content-box">
                                    <p className="base-text title">
                                        Links
                                    </p>
                                    <ul className="links">
                                        {links?.map(l =>
                                            <li className="para-text">
                                                <a
                                                    className="book-text"
                                                    target="_blank"
                                                    href={l.link}
                                                >
                                                    {l.text}
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                </div> : null}
                                {books?.length ?
                                <div className="profile-content-box">
                                    <p className="base-text title">
                                        Books
                                    </p>
                                    <ul style={{paddingLeft: 0, paddingTop: 10,}} className="books">
                                        {books?.map(book =>
                                            book.link ? <a href={book.link} className="para-text">
                                                {this.renderBook(book)}
                                            </a> : <a rel={"noreferrer"}>{this.renderBook(book)}</a>
                                        )}
                                    </ul>
                                </div> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileData;
