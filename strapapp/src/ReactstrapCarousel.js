import { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
    {
        src: 'wall.webp',
        altText: '강아지1 이미지 대체 문구',
        caption: '강아지1 설명',
        header: '강아지1 제목'
    },
    {
        src: 'pome.png',
        altText: '강아지2 이미지 대체 문구',
        caption: '강아지2 설명',
        header: '강아지2 제목'
    },
    {
        src: 'wall.webp',
        altText: '강아지3 이미지 대체 문구',
        caption: '강아지3 설명',
        header: '강아지3 제목'
    }
]

class ReactstrapCarousel extends Component {
    render() {
        return (
            <div style={{display: 'inline-block', height: '400px'}}>
                <UncontrolledCarousel items={items} />
            </div>
        )
    }
}

export default ReactstrapCarousel;