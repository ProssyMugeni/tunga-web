import React, { Component } from "react";
import PropTypes from "prop-types";
import "./UseCase.scss";
import Button from "../../../shared/core/Button";

class UseCase extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { useCases } = this.props;
        return (
            <div className="UseCase">
                <div className="text-blue font-weight-medium mb-2">
                    USE CASES
                </div>
                {useCases.map((info, i) => (
                    <div
                        className={`UseCase__item UseCase__item--${i} mb-2`}
                        key={i}>
                        <div
                            className="UseCase__img"
                            style={{ background: `url(${info.imgUrl})` }}>
                        </div>
                        <div className="UseCase__title text-blue size-16 mt-3 mb-3">
                            {info.title}
                        </div>
                        <div className="UseCase__cta">
                            <Button
                                size="md"
                                className="btn UseCase__btn"
                                variant=""
                            >
                                Read Now
                            </Button>
                        </div>
                    </div>
                ))}
                <div className="clearfix">
                </div>
            </div>
        );
    }
}

UseCase.propTypes = {};

export default UseCase;