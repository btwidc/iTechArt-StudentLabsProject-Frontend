import React from 'react';
import './MainContent.scss';

const MainContent = () => {
    return (
        <div className="content-info-container">
            <div className="content-header-container">
                <div className="content-header">
                    <div className="content-header-title">
                        <h2>Event creating service</h2>
                    </div>
                    <button>Create event</button>
                </div>
                <div className="content-header-description-container">
                    <div className="content-header-description">
                        A CRM Software helps businesses to manage their
                        relationship with the customers. This is very effective
                        for any business as it brings a number of sales,
                        marketing, and customer-facing functions on one single
                        screen. It also stores details about your customers to
                        help you in handling them better.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
