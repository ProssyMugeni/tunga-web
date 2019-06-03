import React, { Component } from "react";
import "./ServiceDetail.scss";
import UseCase from "../UseCase/UseCase";
import { Card, CardBody, CardText, CardTitle, CardImg } from "reactstrap";
import Icon from "../../../shared/core/Icon";

class ServiceDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { service, nextService, onServiceSelection, onCloseServiceDetail } = this.props;
        return (
            <section className="ServiceDetail">
                <div className="ServiceDetail__left-bg" style={{ backgroundImage: `url(${service.imgUrl})` }}>
                </div>
                <div className="ServiceDetail__card">
                    <Card className="border-0">
                        <CardBody className="">
                            <CardTitle className="text-blue">
                                {service.title}
                            </CardTitle>
                            <CardText className="size-16">
                                {service.longDescription || service.description}
                            </CardText>
                            <div className="text-blue font-weight-medium">
                                LEAD TIME
                            </div>
                            <CardText className="size-14">{service.leadTime}</CardText>
                            <div className="text-blue font-weight-medium">
                                PRICE INDICATION
                            </div>
                            <CardText className="size-14">{service.price}</CardText>
                            <div className="ServiceDetail__use-case">
                                <UseCase useCases={service.useCases || []}/>
                            </div>
                            <div className="mt-5">
                                {nextService &&
                                <a className="ServiceDetail__cta text-primary size-14"
                                   onClick={() => {
                                       onServiceSelection(nextService);
                                   }}
                                >
                                    {nextService.title} <Icon name='arrow-right' size='card'/>
                                </a>
                                }
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div className="clearfix">
                </div>
                <a className="ServiceDetail__dismiss size-18"
                   onClick={() => {
                       onCloseServiceDetail();
                   }}>
                    <Icon name='times-circle-o' size='md'/>
                </a>
            </section>
        );
    }
}

ServiceDetail.propTypes = {};

export default ServiceDetail;