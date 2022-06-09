import btnImg from '.././btn_send_small.png';
import sample from '.././굽신굽신.png';

const KakaoLink = () => {
    return(
        <div>

            <img src={sample} style={{width:'300px',height:'300px'}}/>
            <p></p>
            <p>유용하게 사용하셨다면^^;;</p>
            <a href="http://kko.to/ceF9SxEy8" target='blank'><img src={btnImg} /></a>
            <p></p>
            <p></p>
            <p>보내주시는 응원은 조금 더 보태서 모두 기부하도록 하겠습니다ㅎㅎ</p>
            <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fmy0990.github.io%2Fswitching_seats%2F&count_bg=%2359B017&title_bg=%23CABFBF&icon=&icon_color=%23A60D0D&title=hits&edge_flat=false"/></a>
            
           
        </div>
    )
}

export default KakaoLink;