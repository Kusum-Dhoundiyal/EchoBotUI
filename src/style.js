import styled from "styled-components";

const Title = styled.div`
    background-color: blueviolet;
    text-align: center;
    vertical-align: middle;
    padding: 16px;
    font-size: 20px;
    font-weight: 500;
    position: fixed;
    width: 100%;
    top: 0;
}
`;

const Message = styled.div`
    display:inline-block;
    position: relative;
    color: #333;
    font-size: 14px;
    min-height: 20px;
    padding: 10px 14px 12px;
    border-radius: 5px;
    background: blueviolet;
`;

const MessageContainer = styled.div`
    padding: 10px;
    right: ${props => props.isBotReply ? "0" : ""};
    position: ${props => props.isBotReply ? "absolute" : ""};
`;

const MessageListContainer = styled.div`
    position: relative;
    top: 70px;
    right: 0;
    overflow: auto;
    max-height: 450px;
    height:450px;
`;

const SendInputBox = styled.input`
    width: 90%;
    margin: 60px;
    border-radius: 5px;
    height: 35px;
    bottom: 0;
    position: absolute;
`;

export {
    Title,
    Message,
    MessageContainer,
    MessageListContainer,
    SendInputBox
}