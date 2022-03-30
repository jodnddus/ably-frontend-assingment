import styled from "styled-components";

interface UserInfoCardPropTypes {
  name: string;
  email: string;
  profileImg: string;
}

function UserInfoCard({ name, email, profileImg }: UserInfoCardPropTypes) {
  return (
    <UserInfoCardContainer>
      {name}
      {email}
      <img src={profileImg} alt="프로필 이미지" />
    </UserInfoCardContainer>
  );
}

const UserInfoCardContainer = styled.div``;

export default UserInfoCard;
