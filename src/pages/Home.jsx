// Home 화면
import { useNavigate } from "react-router-dom";
import {ButtonContainer, TransBtn} from "../component/ButtonContainer";
import imgButton from "../images/nedbank_s.png";

const Home = () => {
    const navigate = useNavigate();
    const onCLickBtn= num => {
        switch (num) {
            case 1: navigate("/memberlist"); break;
            case 2: break;
            case 3: navigate("/profile"); break;
            case 4: navigate("/setting"); break;
            default:
        }
    }

    return (
        <>
            <div>
                <ButtonContainer>
                    <TransBtn onClick={() => onCLickBtn(1)}>회원리스트</TransBtn>
                    <TransBtn onClick={() => onCLickBtn(2)}>뉴스 보기</TransBtn>
                    <TransBtn onClick={() => onCLickBtn(3)}>사진 업로드</TransBtn>
                    <TransBtn onClick={() => onCLickBtn(4)}>테마 변경</TransBtn>
                </ButtonContainer>
            </div>
            <div className="bglogo">
                <img src={imgButton} alt="buttonimg" />
            </div>
        </>
    )
}

export default Home;