import './Function.css';

function Function() {
    return(
        <div className="IntroduceContainers">
            <h3 id="introduce-function-h3">기능소개</h3>
            <div id="functions-container">
                <div className="Function">
                    <div className="WrapFunction">
                        <div>
                            {/* <img /> */}
                            회원관리
                        </div>
                        <div>
                            기능
                        </div>
                    </div>
                </div>
                <div className="Function">
                    <div className="WrapFunction">
                        <div>
                            {/* <img /> */}
                            계시판 이용
                        </div>
                        <div>
                            기능
                        </div>
                    </div>
                </div>
                <div className="Function">
                    <div className="WrapFunction">
                        <div>
                            {/* <img /> */}
                            플래너 작성
                        </div>
                        <div>
                            기능
                        </div>
                    </div>
                </div>
                <div className="Function">
                    <div className="WrapFunction">
                        <div>
                            {/* <img /> */}
                            인공지능 챗봇
                        </div>
                        <div>
                            기능
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Function;