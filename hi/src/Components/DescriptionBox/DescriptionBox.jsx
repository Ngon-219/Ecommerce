import React from "react";
import './DescriptionBox.css';

const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="description-nav-box-fade">Reviews</div>
            </div>
            <div className="descriptionbox-description">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa reiciendis, quae dolores neque necessitatibus ea eos praesentium pariatur iste nostrum distinctio aspernatur quam ipsum at adipisci facere dicta eius sed!
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem vitae sint, aperiam impedit deleniti laborum, ratione odio quibusdam iste, incidunt voluptatum omnis sequi ea excepturi magnam? Est blanditiis perspiciatis doloribus.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox;