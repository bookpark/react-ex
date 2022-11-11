import { Component } from "react";
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";

class ReactstrapCard extends Component {
    render() {
        return (
            <div style={{ width: '200px' }}>
                <Card>
                    <CardImg src="https://w.namu.la/s/0d1c7c8964ecbacbfe48c726b9bd96e69a03fb62f7dfa2bceb7b75cea3d56de5335216bd3262d366998e2303f7989c2fad6edc92d000fa773c00d7f081073cd256aa32f1e6568574e45bd80c7efcd53fa2ffd69b006fcd21c9785d41e1cc3f1a4784d09e47139f21b9b5a2d9e62ec741" alt="card image" />
                    <CardBody>
                        <CardTitle>뉴진스</CardTitle>
                        <CardSubtitle>해린</CardSubtitle>
                        <CardText>대한민국의 ADOR 소속 5인조 걸그룹 NewJeans의 멤버다.</CardText>
                        <Button href="https://namu.wiki/w/%ED%95%B4%EB%A6%B0(NewJeans)">나무위키로</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default ReactstrapCard;