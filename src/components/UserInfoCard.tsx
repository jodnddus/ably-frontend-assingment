import styled from "styled-components";

interface UserInfoCardPropTypes {
  name: string;
  email: string;
  profileImg: string;
}

function UserInfoCard({ name, email, profileImg }: UserInfoCardPropTypes) {
  return (
    <UserInfoCardContainer>
      <ProfileImg src={profileImg} alt="프로필 이미지" />
      <UserInfoText>
        <span className="name">{name}</span>
        <span className="email">{email}</span>
      </UserInfoText>
    </UserInfoCardContainer>
  );
}

const UserInfoCardContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
`;
const ProfileImg = styled.img`
  border-radius: 50%;
  border: 1px solid #d0d7de;
  box-shadow: 0 0 0 1px rgb(27 31 36 / 15%);
`;
const UserInfoText = styled.h1`
  display: flex;
  flex-direction: column;
  .name {
    font-size: 24px;
    line-height: 1.25;
  }
  .email {
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    color: #57606a;
  }
`;

export default UserInfoCard;
