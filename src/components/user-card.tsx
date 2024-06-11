import React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "state";
import { Avatar, Box, Text } from "zmp-ui";

const UserCard: React.FunctionComponent = () => {
  const { userInfo } = useRecoilValue(userState);

  return (
    <Box flex>
      <Avatar
        story="default"
        online
        src={userInfo.avatar.startsWith("http") ? userInfo.avatar : undefined}
      >
        {userInfo.avatar}
      </Avatar>
      <Box ml={4}>
        <Text.Title className="mt-3">Xin chào {userInfo.name}</Text.Title>
      </Box>
    </Box>
  );
};

export default UserCard;
